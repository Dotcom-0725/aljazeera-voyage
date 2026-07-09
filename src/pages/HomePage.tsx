import { Link } from "react-router-dom";
import {
  SEO_PAGES,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
} from "../data/seo";
import { FAQ_ITEMS } from "../data/site";
import { useSeo } from "../hooks/useSeo";
import { HomeHero } from "../components/home/HomeHero";
import { HomeServices } from "../components/home/HomeServices";
import { HomeWhyUs } from "../components/home/HomeWhyUs";
import {
  HomeFeaturedTours,
  HomeFeaturedUmrah,
} from "../components/home/HomePackages";
import { HomeTestimonials } from "../components/home/HomeTestimonials";
import { HomeGallery } from "../components/home/HomeGallery";
import { HomeFAQ } from "../components/home/HomeFAQ";
import { CTASection } from "../components/shared/CTASection";
import { InternalLinks } from "../components/shared/InternalLinks";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Card } from "../components/ui/card";
import { DESTINATIONS } from "../data/destinations";
import { OptimizedImage } from "../components/shared/OptimizedImage";

export default function HomePage() {
  useSeo({
    ...SEO_PAGES.home,
    schemas: [
      buildOrganizationSchema(),
      buildBreadcrumbSchema([{ name: "الرئيسية", path: "/" }]),
      buildFaqSchema([...FAQ_ITEMS]),
    ],
  });

  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeWhyUs />
      <HomeFeaturedUmrah />

      {/* Destination SEO landing links */}
      <section className="bg-luxury py-16 md:py-20" aria-labelledby="destinations-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="وجهات بحث شائعة"
            title="رحلات تركيا ودبي من المغرب"
            subtitle="صفحات مخصصة لتحسين ظهوركم على Google وزيادة التحويل عبر واتساب."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DESTINATIONS.map((d) => (
              <Link key={d.slug} to={`/destinations/${d.slug}`} className="group">
                <Card className="card-lift overflow-hidden p-0">
                  <div className="relative h-40 overflow-hidden">
                    <OptimizedImage
                      src={d.heroImage}
                      alt={`رحلات ${d.name} من المغرب`}
                      className="h-full w-full transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-3 right-3 left-3 text-white">
                      <div className="text-xs text-gold-light">{d.country}</div>
                      <h3 className="font-display text-xl font-bold">{d.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs leading-6 text-muted-foreground line-clamp-2">
                      {d.summary}
                    </p>
                    <div className="mt-3 text-sm font-extrabold text-primary">
                      من {d.priceFrom}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HomeFeaturedTours />
      <HomeTestimonials />
      <HomeGallery />
      <HomeFAQ />

      <InternalLinks
        title="خدماتنا الأكثر بحثًا في طنجة"
        items={[
          {
            to: "/umrah",
            label: "وكالة عمرة طنجة",
            desc: "باقات العمرة من المغرب",
          },
          {
            to: "/hajj",
            label: "الحج المغرب",
            desc: "برامج حج مريحة للعائلات",
          },
          {
            to: "/destinations/turkey",
            label: "رحلات تركيا من المغرب",
            desc: "إسطنبول للعائلات",
          },
          {
            to: "/destinations/dubai",
            label: "رحلات دبي من المغرب",
            desc: "برامج 5 أيام",
          },
          {
            to: "/flights",
            label: "حجز تذاكر الطيران طنجة",
            desc: "عروض سريعة عبر واتساب",
          },
          {
            to: "/visa",
            label: "استخراج التأشيرات طنجة",
            desc: "عمرة · شنغن · تركيا",
          },
          {
            to: "/blog",
            label: "مدونة السفر",
            desc: "نصائح SEO ومحتوى مفيد",
          },
          {
            to: "/contact",
            label: "اتصل بوكالة أسفار طنجة",
            desc: "دوار النجمة · 0671872273",
          },
        ]}
      />

      <CTASection
        title="احجز استشارتك المجانية خلال دقيقتين"
        subtitle="أفضل وقت للحجز هو الآن — رد سريع عبر واتساب وبرامج واضحة بدون مفاجآت."
      />
    </>
  );
}
