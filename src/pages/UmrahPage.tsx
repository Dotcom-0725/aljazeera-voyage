import {
  SEO_PAGES,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
} from "../data/seo";
import { IMAGES } from "../data/site";
import { UMRAH_SECTIONS } from "../data/umrah";
import { useSeo } from "../hooks/useSeo";
import { useSectionParam } from "../hooks/useSectionParam";
import { PageHero } from "../components/shared/PageHero";
import {
  UmrahGuidance,
  UmrahOccasions,
  UmrahPrices,
  UmrahRamadan,
  UmrahSubNav,
  UmrahVip,
  UmrahYearRound,
} from "../components/umrah/UmrahSections";
import { CTASection } from "../components/shared/CTASection";
import { InternalLinks } from "../components/shared/InternalLinks";
import { Accordion } from "../components/ui/accordion";

const SECTION_IDS = UMRAH_SECTIONS.map((s) => s.id);

const umrahFaq = [
  {
    q: "ما أفضل وكالة عمرة في طنجة؟",
    a: "اختر وكالة شفافة في الأسعار، واضحة في الفنادق، وتقدم متابعة قبل وأثناء الرحلة. وكالة مرشد الطواف للأسفار تخدم العائلات من البرانص 2 بطنجة.",
  },
  {
    q: "كم سعر العمرة من المغرب تقريبًا؟",
    a: "بالنسبة للبرامج العادية على مدار السنة: البرنامج الاقتصادي ابتداءً من 12,500 درهم، والمتوسط ابتداءً من 16,000 درهم، والسياحي ابتداءً من 18,500 درهم للشخص الواحد. تختلف الأسعار حسب تاريخ السفر والبرنامج والخدمات، وأسعار رمضان تُحدَّد حسب كل برنامج.",
  },
  {
    q: "هل برامج العمرة تشمل التأشيرة والطيران؟",
    a: "غالبًا نعم. نوضح في كل باقة ما يشمله السعر: تأشيرة، طيران، إقامة، تنقلات ومرشد.",
  },
  {
    q: "من أين تنطلق رحلات العمرة؟",
    a: "نوفر رحلات جوية مباشرة مع الخطوط الجوية السعودية من طنجة إلى المدينة المنورة، ومن الدار البيضاء إلى جدة، حسب البرنامج وتوافر المقاعد.",
  },
  {
    q: "ما مدة برامج العمرة؟",
    a: "البرامج العادية على مدار السنة بمدة 14 يوماً أو 21 يوماً، وبرامج رمضان بمدد 15 و30 و36 و42 يوماً ومدد أخرى حسب البرامج المتاحة.",
  },
  {
    q: "هل يمكن السفر مع العائلة والأطفال؟",
    a: "نعم، لدينا باقات عائلية بغرف مناسبة وبرنامج مرن.",
  },
];

export default function UmrahPage() {
  useSectionParam(SECTION_IDS);

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
        title="برامج العمرة من المغرب"
        subtitle="برامج عمرة على مدار السنة وفي شهر رمضان، برحلات مباشرة مع الخطوط الجوية السعودية من طنجة والدار البيضاء، ومرافقة وإرشاد طوال الإقامة."
        image={IMAGES.hero}
        breadcrumbs={[
          { label: "الرئيسية", to: "/" },
          { label: "العمرة" },
        ]}
      />

      <UmrahSubNav />
      <UmrahYearRound />
      <UmrahRamadan />
      <UmrahPrices />
      <UmrahVip />
      <UmrahOccasions />
      <UmrahGuidance />

      <section className="bg-luxury py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-center font-display text-2xl font-bold text-emerald-deep md:text-3xl">
            أسئلة شائعة عن العمرة من طنجة
          </h2>
          <Accordion items={umrahFaq} />
        </div>
      </section>

      <InternalLinks
        items={[
          { to: "/hajj", label: "برامج الحج", desc: "الحج المغرب" },
          { to: "/visa", label: "تأشيرات العمرة", desc: "المساعدة في الإجراءات" },
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
