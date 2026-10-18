"""Recolor the client's logo to the website palette without changing its shapes.

Soft palette transfer in OKLab: every pixel is shifted by a weighted blend of
(target - source) offsets for the logo's key colors, so gradients and
anti-aliased edges keep their shape. The paper texture is flattened to white.

Usage: python recolor_logo.py <input.jpeg> <out_prefix>
"""
import sys
import numpy as np
from PIL import Image, ImageFilter

# --- sRGB <-> OKLab -------------------------------------------------------
def srgb_to_lin(c):
    return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)

def lin_to_srgb(c):
    c = np.clip(c, 0, 1)
    return np.where(c <= 0.0031308, c * 12.92, 1.055 * c ** (1 / 2.4) - 0.055)

M1 = np.array([[0.4122214708, 0.5363325363, 0.0514459929],
               [0.2119034982, 0.6806995451, 0.1073969566],
               [0.0883024619, 0.2817188376, 0.6299787005]])
M2 = np.array([[0.2104542553, 0.7936177850, -0.0040720468],
               [1.9779984951, -2.4285922050, 0.4505937099],
               [0.0259040371, 0.7827717662, -0.8086757660]])

def rgb_to_oklab(rgb):
    lms = srgb_to_lin(rgb) @ M1.T
    return np.cbrt(lms) @ M2.T

def oklab_to_rgb(lab):
    lms = (lab @ np.linalg.inv(M2).T) ** 3
    return lin_to_srgb(lms @ np.linalg.inv(M1).T)

def lab(c):
    return rgb_to_oklab(np.array(c, dtype=float) / 255.0)

# --- palette: source color in the client's file -> website color ----------
PALETTE = [
    # paper + white plane -> pure white
    ((228, 228, 226), (255, 255, 255)),
    ((238, 238, 234), (255, 255, 255)),
    ((205, 205, 203), (255, 255, 255)),
    # navy (castle, lighthouse, text) -> deep emerald
    ((9, 44, 76), (5, 61, 46)),
    ((20, 40, 62), (6, 54, 41)),
    # sea blues -> emerald tones
    ((25, 74, 114), (11, 107, 81)),
    ((39, 103, 149), (20, 134, 102)),
    ((90, 150, 190), (88, 176, 146)),
    # golds -> site gold (#c9a227 family)
    ((220, 180, 46), (206, 167, 45)),
    ((240, 200, 60), (226, 192, 88)),
    ((188, 139, 10), (168, 132, 28)),
    ((228, 203, 110), (232, 212, 139)),
]

SIGMA = 0.075  # OKLab distance scale for the soft weights


def recolor(path, prefix):
    im = Image.open(path).convert("RGB")
    im = im.filter(ImageFilter.MedianFilter(3))           # tame JPEG noise
    im = im.resize((im.width * 2, im.height * 2), Image.LANCZOS)
    rgb = np.asarray(im, dtype=float) / 255.0
    L = rgb_to_oklab(rgb)

    src = np.stack([lab(s) for s, _ in PALETTE])
    dst = np.stack([lab(t) for _, t in PALETTE])
    wsum = np.zeros(L.shape[:2])
    shift = np.zeros_like(L)
    for s, d in zip(src, dst):
        w = np.exp(-((L - s) ** 2).sum(-1) / (2 * SIGMA ** 2))
        wsum += w
        shift += w[..., None] * (d - s)
    out = L + shift / (wsum[..., None] + 1e-12)

    # flatten paper texture: light, low-chroma pixels -> white
    chroma = np.hypot(out[..., 1], out[..., 2])
    t = np.clip((out[..., 0] - 0.78) / 0.10, 0, 1) * np.clip((0.04 - chroma) / 0.02, 0, 1)
    out = out * (1 - t[..., None]) + np.array([1.0, 0, 0]) * t[..., None]

    res = (oklab_to_rgb(out) * 255).round().clip(0, 255).astype(np.uint8)
    Image.fromarray(res).save(f"{prefix}.png", optimize=True)

    # transparent version: remove only the white connected to the border
    white = (res.min(-1) > 246)
    from collections import deque
    h, wd = white.shape
    bg = np.zeros_like(white)
    q = deque()
    for x in range(wd):
        for y in (0, h - 1):
            if white[y, x] and not bg[y, x]:
                bg[y, x] = True; q.append((y, x))
    for y in range(h):
        for x in (0, wd - 1):
            if white[y, x] and not bg[y, x]:
                bg[y, x] = True; q.append((y, x))
    while q:
        y, x = q.popleft()
        for ny, nx in ((y + 1, x), (y - 1, x), (y, x + 1), (y, x - 1)):
            if 0 <= ny < h and 0 <= nx < wd and white[ny, nx] and not bg[ny, nx]:
                bg[ny, nx] = True; q.append((ny, nx))
    rgba = unmix_white_edges(res, bg)
    Image.fromarray(rgba, "RGBA").save(f"{prefix}-transparent.png", optimize=True)

    # reversed version for dark backgrounds: deep emerald parts -> cream
    # (flat fill by darkness so the shading texture doesn't show through)
    dark_lab = rgb_to_oklab(rgba[..., :3] / 255.0)
    w = np.clip((0.44 - dark_lab[..., 0]) / 0.07, 0, 1)[..., None]
    cream = np.array([248, 243, 227], dtype=float)
    inv_rgb = (rgba[..., :3] * (1 - w) + cream * w).round().clip(0, 255).astype(np.uint8)
    Image.fromarray(np.dstack([inv_rgb, rgba[..., 3]]), "RGBA").save(
        f"{prefix}-dark-bg.png", optimize=True)
    return bg.mean()


def unmix_white_edges(res, bg):
    """Alpha for the logo with the outer white removed and no white fringe.

    In a thin band next to the background, each pixel is treated as a mix of
    the nearby solid color (darkest neighbor per channel) and white, and is
    un-mixed into that color plus partial alpha.
    """
    img = Image.fromarray(res)
    core = np.asarray(img.filter(ImageFilter.MinFilter(9))).astype(float)
    near = np.asarray(Image.fromarray((bg * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(7))) > 0
    band = near & ~bg
    c = res.astype(float)
    deficit = (255 - c).max(-1)
    core_deficit = np.maximum((255 - core).max(-1), 1)
    a = np.clip(deficit / core_deficit, 0, 1)
    alpha = np.where(bg, 0.0, 1.0)
    alpha[band] = a[band]
    rgb = c.copy()
    ab = np.maximum(alpha[..., None], 1e-3)
    unmixed = np.clip((c - 255 * (1 - ab)) / ab, 0, 255)
    rgb[band] = unmixed[band]
    return np.dstack([rgb.round().astype(np.uint8), (alpha * 255).round().astype(np.uint8)])


if __name__ == "__main__":
    frac = recolor(sys.argv[1], sys.argv[2])
    print(f"done {sys.argv[2]} (background {frac:.0%})")
