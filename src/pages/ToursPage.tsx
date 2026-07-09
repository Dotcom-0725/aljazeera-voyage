import { Link } from "react-router-dom";
import {
  SEO_PAGES,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
} from "../data/seo";
import { IMAGES, TOUR_PACKAGES } from "../data/site";
import { DESTINATIONS } from "../data/destinations";
import { useSeo } from "../hooks/useSeo";
import { PageHero } from "../components/shared/PageHero";
import { SectionHeader } from "../components/shared/SectionHeader";
import { PackageCard } from "../components/shared/PackageCard";
import { CTASection } from "../components/shared/CTASection";
import { InternalLinks } from "../components/shared/InternalLinks";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { OptimizedImage } from "../components/shared/OptimizedImage";

export default function ToursPage() {
  useSeo({
    ...SEO_PAGES.tours,
    schemas: [
      buildOrganizationSchema(),
      buildBreadcrumbSchema([
        { name: "الرئيسية", path: "/" },
        { name: "الرحلات", path: "/tours" },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        badge="رحلات سياحية من المغرب"
        title="رحلات تركيا ودبي وباريس من طنجة"
        subtitle="وجهات عالمية وبرامج مرنة تناسب العائلات والمسافرين الباحثين عن تجربة راقية."
        image={IMAGES.tangier}
        breadcrumbs={[
          { label: "الرئيسية", to: "/" },
          { label: "الرحلات" },
        ]}
      />

      <section className="bg-luxury py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="صفحات الوجهات"
            title="هبوط عالي التحويل لكل وجهة"
            subtitle="صفحات مُحسّنة لكلمات: رحلات تركيا من المغرب ورحلات دبي من المغرب."
          />
          <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DESTINATIONS.map((d) => (
              <Link key={d.slug} to={`/destinations/${d.slug}`} className="group">
                <Card className="card-lift overflow-hidden p-0">
                  <div className="relative h-44">
                    <OptimizedImage
                      src={d.heroImage}
                      alt={`رحلات ${d.name} من المغرب`}
                      className="h-full w-full transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <Badge className="absolute right-3 top-3">{d.badge}</Badge>
                    <div className="absolute bottom-3 right-3 left-3 text-white">
                      <div className="text-xs text-gold-light">{d.country}</div>
                      <h3 className="font-display text-xl font-bold">{d.name}</h3>
                      <div className="mt-1 text-sm font-bold text-gold-light">
                        من {d.priceFrom}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <SectionHeader
            badge="الباقات"
            title="برامج سياحية جاهزة"
            subtitle="كل بطاقة تعرض الوجهة، المدة، المغادرة، الفندق والسعر."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TOUR_PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      <InternalLinks
        items={[
          { to: "/destinations/turkey", label: "رحلات تركيا من المغرب" },
          { to: "/destinations/dubai", label: "رحلات دبي من المغرب" },
          { to: "/flights", label: "حجز الطيران" },
          { to: "/visa", label: "التأشيرات" },
        ]}
      />

      <CTASection
        title="هل تبحث عن وجهة معينة؟"
        subtitle="أخبرنا بوجهتك وميزانيتك عبر واتساب وسنجهّز لك عرضاً مخصصاً."
      />
    </>
  );
}
