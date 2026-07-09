import { useEffect } from "react";

/** Injects / updates a JSON-LD script tag by id */
export function JsonLd({ id, data }: { id: string; data: object | object[] }) {
  useEffect(() => {
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }, [id, data]);

  return null;
}
