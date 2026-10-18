import { FileCheck2, Globe2, Info, ScrollText } from "lucide-react";
import {
  SEO_PAGES,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
} from "../data/seo";
import {
  IMAGES,
  VISA_CATEGORIES,
  VISA_NOTE,
  VISA_SERVICES,
  whatsappLink,
} from "../data/site";
import { useSeo, trackWhatsAppClick } from "../hooks/useSeo";
import { PageHero } from "../components/shared/PageHero";
import { SectionHeader } from "../components/shared/SectionHeader";
import { CTASection } from "../components/shared/CTASection";
import { InternalLinks } from "../components/shared/InternalLinks";
import { Accordion } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { WhatsAppButton } from "../components/shared/WhatsAppButton";

const visaFaq = [
  {
    q: "هل تقدمون استخراج التأشيرات في طنجة؟",
    a: "نعم، نساعد في تجهيز ومتابعة ملفات تأشيرات العمرة والسياحة حسب الوجهة.",
  },
  {
    q: "هل تضمنون قبول التأشيرة؟",
    a: "لا يمكن ضمان القبول 100%، لكن تجهيز ملف مرتب يرفع فرص القبول بشكل كبير.",
  },
  {
    q: "هل تصدر الوكالة التأشيرة مباشرة؟",
    a: "لا، دورنا هو المساعدة في الإجراءات وتجهيز الملف، أما قرار منح التأشيرة فيعود إلى الجهات المختصة. وتختلف الوثائق والآجال والشروط حسب الدولة ونوع التأشيرة.",
  },
  {
    q: "ما الوجهات الأكثر طلبًا؟",
    a: "تأشيرة العمرة، تركيا، الإمارات، وملفات شنغن حسب الموسم.",
  },
];

export default function VisaPage() {
  useSeo({
    ...SEO_PAGES.visa,
    schemas: [
      buildOrganizationSchema(),
      buildBreadcrumbSchema([
        { name: "الرئيسية", path: "/" },
        { name: "التأشيرات", path: "/visa" },
      ]),
      buildFaqSchema(visaFaq),
    ],
  });

  return (
    <>
      <PageHero
        badge="استخراج التأشيرات طنجة"
        title="خدمات التأشيرات باحترافية وسرعة"
        subtitle="نسهّل عليكم الإجراءات ونرافق ملفكم خطوة بخطوة حتى تقديم طلب أقوى."
        image={IMAGES.mosque}
        breadcrumbs={[
          { label: "الرئيسية", to: "/" },
          { label: "التأشيرات" },
        ]}
      />

      <section className="bg-luxury py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خدماتنا"
            title="خدمات التأشيرات"
            subtitle="نساعدكم في إجراءات تأشيرات العمرة وتأشيرات الدول العربية ودول الخليج العربي."
          />

          <div className="mb-6 grid gap-6 md:grid-cols-2">
            {VISA_CATEGORIES.map((cat, i) => (
              <Card key={cat.id} className="flex flex-col p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-gradient text-gold-light shadow-emerald">
                    {i === 0 ? <ScrollText className="h-5 w-5" /> : <Globe2 className="h-5 w-5" />}
                  </div>
                  <h3 className="font-display text-xl font-bold text-emerald-deep md:text-2xl">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-2xl bg-muted px-4 py-3 text-sm leading-7 text-foreground">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <WhatsAppButton
                    message={cat.message}
                    label="استفسر عن التأشيرة"
                    track={`visa_${cat.id}`}
                    block
                  />
                </div>
              </Card>
            ))}
          </div>

          <p className="mb-14 flex items-start gap-2.5 rounded-2xl border border-gold/25 bg-gold-pale/60 px-4 py-3 text-sm leading-7 text-muted-foreground">
            <Info className="mt-1 h-4 w-4 shrink-0 text-gold" />
            <span>{VISA_NOTE}</span>
          </p>

          <h3 className="mb-6 text-center font-display text-2xl font-bold text-emerald-deep">
            استشارات وخدمات أخرى
          </h3>

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {VISA_SERVICES.map((item) => (
                <Card key={item.title} className="card-lift p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-pale text-gold">
                    <ScrollText className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-emerald-deep">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </div>

            <Card className="lg:col-span-4 h-fit border-gold/20 bg-gradient-to-b from-card to-gold-pale/40 p-7">
              <div className="mb-4 inline-flex rounded-2xl bg-emerald-gradient p-3 text-gold-light shadow-emerald">
                <FileCheck2 className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-emerald-deep">
                ابدأ ملف التأشيرة اليوم
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                أرسل وجهتك ونوع التأشيرة عبر واتساب، وسنوجّهك فورًا بالمستندات
                المطلوبة.
              </p>
              <a
                href={whatsappLink("السلام عليكم، أحتاج مساعدة بخصوص التأشيرة من طنجة")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 block"
                onClick={() => trackWhatsAppClick("visa_page")}
              >
                <Button variant="whatsapp" className="w-full">
                  ابدأ الآن عبر واتساب
                </Button>
              </a>
            </Card>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-5 text-center font-display text-2xl font-bold text-emerald-deep">
              أسئلة شائعة عن التأشيرات
            </h2>
            <Accordion items={visaFaq} />
          </div>
        </div>
      </section>

      <InternalLinks
        items={[
          { to: "/blog/visa-tips-morocco", label: "نصائح قبول التأشيرة" },
          { to: "/umrah", label: "تأشيرة العمرة" },
          { to: "/destinations/paris", label: "تأشيرة فرنسا / باريس" },
          { to: "/contact", label: "مكتب طنجة" },
        ]}
      />

      <CTASection />
    </>
  );
}
