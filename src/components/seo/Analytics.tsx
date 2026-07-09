import { useEffect } from "react";
import { TRACKING } from "../../data/seo";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

/**
 * Loads GA4 + Facebook Pixel once.
 * Replace TRACKING IDs in src/data/seo.ts with real production values.
 */
export function Analytics() {
  useEffect(() => {
    const { ga4Id, facebookPixelId, searchConsoleVerification } = TRACKING;

    // Search Console verification meta
    if (
      searchConsoleVerification &&
      !searchConsoleVerification.includes("token")
    ) {
      let meta = document.querySelector(
        'meta[name="google-site-verification"]'
      );
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "google-site-verification");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", searchConsoleVerification);
    }

    // GA4
    if (ga4Id && !ga4Id.includes("XXXX")) {
      if (!document.getElementById("ga4-src")) {
        const s = document.createElement("script");
        s.id = "ga4-src";
        s.async = true;
        s.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
        document.head.appendChild(s);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(...args: unknown[]) {
          window.dataLayer?.push(args);
        };
        window.gtag("js", new Date());
        window.gtag("config", ga4Id, {
          anonymize_ip: true,
          send_page_view: true,
        });
      }
    }

    // Facebook Pixel
    if (facebookPixelId && !facebookPixelId.includes("XXX")) {
      if (!document.getElementById("fb-pixel")) {
        const script = document.createElement("script");
        script.id = "fb-pixel";
        script.text = `
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${facebookPixelId}');
          fbq('track', 'PageView');
        `;
        document.head.appendChild(script);
      }
    }
  }, []);

  return null;
}

/** SPA pageview helper for route changes */
export function trackPageView(path: string, title: string) {
  try {
    window.gtag?.("event", "page_view", {
      page_path: path,
      page_title: title,
    });
    window.fbq?.("track", "PageView");
  } catch {
    // ignore
  }
}
