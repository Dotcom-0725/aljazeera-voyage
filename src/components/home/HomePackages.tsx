import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { TOUR_PACKAGES, UMRAH_PACKAGES } from "../../data/site";
import { SectionHeader } from "../shared/SectionHeader";
import { PackageCard } from "../shared/PackageCard";
import { Button } from "../ui/button";

export function HomeFeaturedUmrah() {
  return (
    <section className="relative bg-luxury py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="برامج العمرة"
          title="باقات عمرة مميزة"
          subtitle="اختر الباقة الأنسب لك ولعائلتك مع تنظيم راقٍ من طنجة إلى الحرمين الشريفين."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {UMRAH_PACKAGES.slice(0, 3).map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/umrah">
            <Button variant="outline">
              عرض كل برامج العمرة
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeFeaturedTours() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="الرحلات السياحية"
          title="وجهات عالمية مختارة"
          subtitle="برامج مرنة إلى أجمل الوجهات تناسب العائلات والمسافرين من المغرب."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOUR_PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/tours">
            <Button variant="outline">
              استكشف كل الرحلات
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
