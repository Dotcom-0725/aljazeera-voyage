// Builds client-facing presentation pages from logo-concepts.html
import fs from "node:fs";
const src = fs.readFileSync("logo-concepts.html", "utf8");
const head = src.match(/<link href="https:\/\/fonts[^>]+>/)[0];
const defs = src.match(/<!-- Shared symbols -->\s*(<svg width="0"[\s\S]*?<\/svg>)/)[1];
const sections = [...src.matchAll(/<section class="concept">([\s\S]*?)<\/section>/g)].map((m) => {
  const svgs = [...m[1].matchAll(/<svg viewBox[\s\S]*?<\/svg>/g)].map((s) => s[0]);
  return { light: svgs[0], dark: svgs[1] };
});
const names = [
  ["النجمة والطواف", "Étoile & Tawaf"],
  ["القوس المغربي", "Arc marocain"],
  ["الختم الدائري", "Sceau rond"],
];
const css = `
:root{--em:#064e3b;--gold:#c9a227}
*{box-sizing:border-box;margin:0}
body{background:#f4f1e8;font-family:Cairo,sans-serif;color:#0a1612}
svg{direction:ltr;max-width:100%;height:auto;display:block}
.top{text-align:center;padding:56px 40px 8px}
.top h1{font-family:Amiri,serif;font-size:46px;color:var(--em)}
.top .fr{font-family:Cinzel,serif;letter-spacing:5px;color:#a8841c;font-size:18px;margin-top:6px}
.top p{color:#5b6b64;font-size:20px;margin-top:14px}
.tile{border-radius:26px;display:flex;align-items:center;justify-content:center}
.light{background:#fff;box-shadow:0 12px 34px rgba(6,78,59,.10)}
.dark{background:radial-gradient(120% 120% at 70% 0%,#0b6b51 0%,#064e3b 45%,#042f22 100%)}
.num{display:inline-flex;align-items:center;gap:12px;font-weight:800;color:var(--em);font-size:24px}
.num b{display:inline-flex;width:46px;height:46px;border-radius:50%;background:var(--em);color:#e8d48b;align-items:center;justify-content:center;font-size:24px}
.num small{font-family:Cinzel,serif;font-size:15px;letter-spacing:2px;color:#a8841c;font-weight:700}
.big svg{width:100%;height:100%}
.foot{text-align:center;color:#8a958f;font-size:16px;padding:10px 0 40px}`;
const page = (body, w) => `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="UTF-8">${head}
<style>${css} body{width:${w}px}</style></head><body>${defs}${body}</body></html>`;

// Combined comparison sheet
const cols = sections.map((s, i) => `
  <div style="display:flex;flex-direction:column;gap:18px">
    <div class="num"><b>${i + 1}</b><span>${names[i][0]}</span><small>${names[i][1]}</small></div>
    <div class="tile light" style="height:300px;padding:26px">${s.light}</div>
    <div class="tile dark" style="height:430px;padding:30px">${s.dark}</div>
  </div>`).join("");
fs.writeFileSync("export/sheet.html", page(`
  <div class="top"><h1>مرشد الطواف للأسفار والسياحة والحج والعمرة</h1>
  <div class="fr">MORCHID ATAOUAF TRAVEL</div>
  <p>اقتراحات الشعار — اختر الرقم الذي يعجبك</p><p dir="ltr" style="margin-top:4px">Propositions de logo — choisissez votre numéro</p></div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:36px;padding:36px 56px 30px">${cols}</div>
  <div style="height:30px"></div>`, 1920));

// One page per concept
sections.forEach((s, i) => {
  fs.writeFileSync(`export/logo-${i + 1}.html`, page(`
  <div class="big" style="padding:48px 56px 56px">
    <div class="num" style="margin-bottom:26px"><b>${i + 1}</b><span>${names[i][0]}</span><small>${names[i][1]}</small></div>
    <div style="display:grid;grid-template-columns:1.25fr 1fr;gap:32px">
      <div class="tile light" style="height:700px;padding:50px">${s.light.replace(/width="\d+"/, 'width="100%"')}</div>
      <div class="tile dark" style="height:700px;padding:60px">${s.dark}</div>
    </div>
  </div>`, 1920));
});
console.log("built");
