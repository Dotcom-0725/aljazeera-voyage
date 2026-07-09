import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";
import { Button } from "../components/ui/button";

export default function NotFoundPage() {
  useSeo({
    title: "الصفحة غير موجودة | وكالة الجزيرة ترافيل",
    description: "عذرًا، الصفحة التي تبحث عنها غير متوفرة. عد إلى الرئيسية أو تواصل معنا عبر واتساب.",
    keywords: "وكالة أسفار طنجة",
    path: "/404",
    noindex: true,
  });

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-28">
      <div className="text-center">
        <div className="font-display text-7xl font-bold text-gold">404</div>
        <h1 className="mt-4 text-2xl font-extrabold text-emerald-deep">
          الصفحة غير موجودة
        </h1>
        <p className="mt-3 text-muted-foreground">
          عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/">
            <Button>العودة للرئيسية</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">اتصل بنا</Button>
          </Link>
          <Link to="/umrah">
            <Button variant="gold">برامج العمرة</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
