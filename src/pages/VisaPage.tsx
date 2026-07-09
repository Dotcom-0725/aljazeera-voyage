import { FileCheck2, ScrollText } from "lucide-react";
import {
  SEO_PAGES,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
} from "../data/seo";
import { IMAGES, VISA_SERVICES, whatsappLink } from "../data/site";
import { useSeo, trackWhatsAppClick } from "../hooks/useSeo";
import { PageHero } from "../components/shared/PageHero";
import { SectionHeader } from "../components/shared/SectionHeader";
import { CTASection } from "../components/shared/CTASection";
import { InternalLinks } from "../components/shared/InternalLinks";
import { Accordion } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

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
            title="تأشيرات العمرة والسياحة من طنجة"
            subtitle="من العمرة إلى الوجهات السياحية الأشهر — دعم واضح وشخصي."
          />

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
