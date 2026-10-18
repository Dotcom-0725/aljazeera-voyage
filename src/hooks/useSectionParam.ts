import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * يمرّر الصفحة إلى القسم المحدد في الرابط (?section=id).
 * نستعمل باراميتر بدل # لأن الموقع يعتمد HashRouter.
 */
export function useSectionParam(validIds: readonly string[]) {
  const [params] = useSearchParams();
  const section = params.get("section");

  useEffect(() => {
    if (!section || !validIds.includes(section)) return;
    // ننتظر انتهاء انتقال الصفحة قبل التمرير
    const t = window.setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 450);
    return () => window.clearTimeout(t);
  }, [section, validIds]);
}
