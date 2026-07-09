import { useEffect } from "react";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  absoluteUrl,
  type SeoConfig,
} from "../data/seo";
import { SITE } from "../data/site";

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string
) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: object | object[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export type UseSeoOptions = SeoConfig & {
  schemas?: object[];
  article?: boolean;
};

export function useSeo(options: UseSeoOptions) {
  const {
    title,
    description,
    keywords,
    path,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = "website",
    noindex = false,
    schemas = [],
  } = options;

  const schemaKey = JSON.stringify(schemas);

  useEffect(() => {
    document.title = title;
    const url = absoluteUrl(path);

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);
    upsertMeta(
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    upsertMeta("name", "author", SITE.name);
    upsertMeta("name", "geo.region", "MA-01");
    upsertMeta("name", "geo.placename", "Tangier");
    upsertMeta("name", "language", "Arabic");

    // Open Graph
    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:site_name", SITE.name);
    upsertMeta("property", "og:locale", "ar_MA");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:alt", title);

    // Twitter Cards
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "twitter:url", url);

    upsertLink("canonical", url);

    if (schemas.length) {
      upsertJsonLd(
        "page-jsonld",
        schemas.length === 1 ? schemas[0] : schemas
      );
    }
  }, [
    title,
    description,
    keywords,
    path,
    ogImage,
    ogType,
    noindex,
    schemaKey,
  ]);
}

export function trackWhatsAppClick(label: string) {
  try {
    const w = window as Window & {
      gtag?: (...args: unknown[]) => void;
      fbq?: (...args: unknown[]) => void;
    };
    w.gtag?.("event", "whatsapp_click", {
      event_category: "conversion",
      event_label: label,
    });
    w.fbq?.("track", "Contact", { content_name: label });
    w.fbq?.("trackCustom", "WhatsAppClick", { label });
  } catch {
    // ignore
  }
}

export function trackLead(label: string) {
  try {
    const w = window as Window & {
      gtag?: (...args: unknown[]) => void;
      fbq?: (...args: unknown[]) => void;
    };
    w.gtag?.("event", "generate_lead", {
      event_category: "conversion",
      event_label: label,
    });
    w.fbq?.("track", "Lead", { content_name: label });
  } catch {
    // ignore
  }
}

export { SITE_URL };
