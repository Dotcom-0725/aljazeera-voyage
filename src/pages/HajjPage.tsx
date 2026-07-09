import { CheckCircle2 } from "lucide-react";
import {
  SEO_PAGES,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
} from "../data/seo";
import { HAJJ_PACKAGES, IMAGES, whatsappLink } from "../data/site";
import { useSeo, trackWhatsAppClick } from "../hooks/useSeo";
import { PageHero } from "../components/shared/PageHero";
import { SectionHeader } from "../components/shared/SectionHeader";
import { PackageCard } from "../components/shared/PackageCard";
import { CTASection } from "../components/shared/CTASection";
import { InternalLinks } from "../components/shared/InternalLinks";
import { Accordion } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const highlights = [
  "إشراف ميداني متخصص طيلة المناسك",
  "مخيمات وإقامة مختارة بعناية",
  "برامج مناسبة للعائلات وكبار السن",
  "متابعة قبل وأثناء وبعد الرحلة",
];

const hajjFaq = [
  {
    q: "كيف أحجز برنامج الحج من المغرب؟",
    a: "تواصل معنا مبكرًا عبر واتساب أو من مقرنا بدوار النجمة بطنجة للحصول على الاستشارة والتسجيل حسب التوفر.",
  },
  {
    q: "هل توجد أماكن محدودة؟",
    a: "نعم، البرامج المريحة غالبًا محدودة. التسجيل المبكر يضمن خيارات أفضل.",
  },
  {
    q: "هل تناسب البرامج كبار السن؟",
    a: "نراعي ذلك في اختيار الإقامة والتنقلات ومستوى الإجهاد اليومي.",
  },
];

export default function HajjPage() {
  useSeo({
    ...SEO_PAGES.hajj,
    schemas: [
      buildOrganizationSchema(),
      buildBreadcrumbSchema([
        { name: "الرئيسية", path: "/" },
        { name: "الحج", path: "/hajj" },
      ]),
      buildFaqSchema(hajjFaq),
    ],
  });

  return (
    <>
      <PageHero
        badge="وكالة الحج والعمرة"
        title="الحج المغرب 2026 — برامج من طنجة"
        subtitle="أعظم رحلة روحية… بتنظيم يمنحك الراحة والطمأنينة في كل مرحلة."
        image={IMAGES.medina}
        breadcrumbs={[
          { label: "الرئيسية", to: "/" },
          { label: "الحج" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid items-center gap-8 lg:grid-cols-2">
            <SectionHeader
              align="start"
              className="mb-0"
              badge="لماذا حجنا مختلف"
              title="تنظيم دقيق… وراحة حقيقية"
              subtitle="نرافقكم في كل خطوة من الاستعداد حتى أداء المناسك والعودة بسلام."
            />
            <Card className="relative overflow-hidden bg-emerald-gradient p-7 text-white border-0">
              <div className="pattern-islamic absolute inset-0 opacity-10 pointer-events-none" />
              <ul className="relative space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-white/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" />
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink("السلام عليكم، أرغب في الاستفسار عن برامج الحج")}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 inline-block"
                onClick={() => trackWhatsAppClick("hajj_page")}
              >
                <Button variant="gold">استشارة حج مجانية</Button>
              </a>
            </Card>
          </div>

          <SectionHeader
            badge="باقات الحج"
            title="برامج موسم الحج"
            subtitle="الأماكن محدودة — سجّل اهتمامك مبكراً لضمان مقعدك."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HAJJ_PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-5 text-center font-display text-2xl font-bold text-emerald-deep">
              أسئلة شائعة عن الحج
            </h2>
            <Accordion items={hajjFaq} />
          </div>
        </div>
      </section>

      <InternalLinks
        items={[
          { to: "/umrah", label: "برامج العمرة", desc: "بديل/تحضير روحي" },
          { to: "/blog/hajj-package-family", label: "دليل اختيار باقة الحج" },
          { to: "/visa", label: "التأشيرات" },
          { to: "/contact", label: "التسجيل المبكر" },
        ]}
      />

      <CTASection />
    </>
  );
}
