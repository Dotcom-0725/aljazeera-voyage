import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, CalendarRange, Clock3, Plane } from "lucide-react";
import { TOUR_PACKAGES } from "../../data/site";
import { SAUDIA_ROUTES, YEAR_ROUND } from "../../data/umrah";
import { UmrahPriceCards, UmrahSectionLink } from "../umrah/UmrahSections";
import { SectionHeader } from "../shared/SectionHeader";
import { PackageCard } from "../shared/PackageCard";
import { Button } from "../ui/button";

export function HomeFeaturedUmrah() {
  const highlights = [
    { icon: CalendarRange, text: "برامج على مدار السنة" },
    { icon: Clock3, text: `${YEAR_ROUND.durations.join(" أو ")}` },
    { icon: CalendarDays, text: `${YEAR_ROUND.tripsPerMonth} كل شهر` },
    ...SAUDIA_ROUTES.map((r) => ({ icon: Plane, text: `${r.from} ← ${r.to}` })),
  ];

  return (
    <section className="relative bg-luxury py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="برامج العمرة"
          title="برامج العمرة على مدار السنة وفي رمضان"
          subtitle="رحلات منتظمة إلى الديار المقدسة، برحلات مباشرة مع الخطوط الجوية السعودية من طنجة والدار البيضاء."
        />
        <ul className="mb-10 flex flex-wrap justify-center gap-2.5">
          {highlights.map((h) => (
            <li
              key={h.text}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-emerald-deep"
            >
              <h.icon className="h-4 w-4 text-gold" />
              {h.text}
            </li>
          ))}
        </ul>

        <UmrahPriceCards compact />

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link to="/umrah">
            <Button variant="default">
              اكتشف برامج العمرة
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <UmrahSectionLink section="ramadan" label="اكتشف برامج رمضان" variant="gold" inPage={false} />
          <UmrahSectionLink section="vip" label="اطلب برنامج VIP" inPage={false} />
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
