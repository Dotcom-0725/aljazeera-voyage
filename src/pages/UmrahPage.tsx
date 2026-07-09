import {
  SEO_PAGES,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
} from "../data/seo";
import { IMAGES, UMRAH_PACKAGES } from "../data/site";
import { useSeo } from "../hooks/useSeo";
import { PageHero } from "../components/shared/PageHero";
import { SectionHeader } from "../components/shared/SectionHeader";
import { PackageCard } from "../components/shared/PackageCard";
import { CTASection } from "../components/shared/CTASection";
import { InternalLinks } from "../components/shared/InternalLinks";
import { Accordion } from "../components/ui/accordion";

const umrahFaq = [
  {
    q: "ما أفضل وكالة عمرة في طنجة؟",
    a: "اختر وكالة شفافة في الأسعار، واضحة في الفنادق، وتقدم متابعة قبل وأثناء الرحلة. وكالة الجزيرة ترافيل تخدم العائلات من دوار النجمة بطنجة.",
  },
  {
    q: "كم سعر العمرة من المغرب تقريبًا؟",
    a: "تختلف حسب الموسم والفندق ومدة الرحلة. باقاتنا تبدأ من عروض اقتصادية إلى VIP، ونوضح التفاصيل قبل الحجز.",
  },
  {
    q: "هل برامج العمرة تشمل التأشيرة والطيران؟",
    a: "غالبًا نعم. نوضح في كل باقة ما يشمله السعر: تأشيرة، طيران، إقامة، تنقلات ومرشد.",
  },
  {
    q: "هل يمكن السفر مع العائلة والأطفال؟",
    a: "نعم، لدينا باقات عائلية بغرف مناسبة وبرنامج مرن.",
  },
];

export default function UmrahPage() {
  useSeo({
    ...SEO_PAGES.umrah,
    schemas: [
      buildOrganizationSchema(),
      buildBreadcrumbSchema([
        { name: "الرئيسية", path: "/" },
        { name: "العمرة", path: "/umrah" },
      ]),
      buildFaqSchema(umrahFaq),
    ],
  });

  return (
    <>
      <PageHero
        badge="وكالة عمرة طنجة"
        title="برامج العمرة من المغرب 2026"
        subtitle="باقات عمرة واضحة للعائلات من طنجة: فنادق، طيران، تأشيرة ومتابعة كاملة."
        image={IMAGES.hero}
        breadcrumbs={[
          { label: "الرئيسية", to: "/" },
          { label: "العمرة" },
        ]}
      />

      <section className="bg-luxury py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="رحلات العمرة المغرب"
            title="اختر باقة العمرة المناسبة"
            subtitle="كل باقة تتضمن الوجهة، المدة، تاريخ المغادرة، الفندق والسعر بوضوح تام."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {UMRAH_PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-5 text-center font-display text-2xl font-bold text-emerald-deep md:text-3xl">
              أسئلة شائعة عن العمرة من طنجة
            </h2>
            <Accordion items={umrahFaq} />
          </div>
        </div>
      </section>

      <InternalLinks
        items={[
          { to: "/hajj", label: "برامج الحج", desc: "الحج المغرب" },
          { to: "/visa", label: "تأشيرة العمرة", desc: "استخراج التأشيرات طنجة" },
          { to: "/blog/umrah-guide-moroccans", label: "دليل العمرة", desc: "مقال SEO شامل" },
          { to: "/contact", label: "احجز استشارة", desc: "واتساب 0671872273" },
        ]}
      />

      <CTASection
        title="هل تحتاج مساعدة لاختيار باقة العمرة؟"
        subtitle="تواصل الآن عبر واتساب وسنقترح الأنسب حسب ميزانيتك وعدد المرافقين."
      />
    </>
  );
}
