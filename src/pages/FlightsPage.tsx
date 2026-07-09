import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, Plane } from "lucide-react";
import {
  SEO_PAGES,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
} from "../data/seo";
import { FLIGHT_OFFERS, IMAGES, whatsappLink } from "../data/site";
import { useSeo, trackLead, trackWhatsAppClick } from "../hooks/useSeo";
import { PageHero } from "../components/shared/PageHero";
import { SectionHeader } from "../components/shared/SectionHeader";
import { CTASection } from "../components/shared/CTASection";
import { InternalLinks } from "../components/shared/InternalLinks";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input, Select } from "../components/ui/input";

export default function FlightsPage() {
  const [sent, setSent] = useState(false);

  useSeo({
    ...SEO_PAGES.flights,
    schemas: [
      buildOrganizationSchema(),
      buildBreadcrumbSchema([
        { name: "الرئيسية", path: "/" },
        { name: "الطيران", path: "/flights" },
      ]),
    ],
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `طلب حجز طيران طنجة:
من: ${data.get("from")}
إلى: ${data.get("to")}
التاريخ: ${data.get("date")}
المسافرون: ${data.get("passengers")}
النوع: ${data.get("trip")}
الاسم: ${data.get("name")}
الهاتف: ${data.get("phone")}`;
    trackLead("flight_form");
    trackWhatsAppClick("flight_form");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <>
      <PageHero
        badge="حجز تذاكر الطيران طنجة"
        title="أفضل عروض الطيران من طنجة والمغرب"
        subtitle="عروض تذاكر مرنة وخدمات سريعة لوجهات العمرة والسياحة حول العالم."
        image={IMAGES.tangier}
        breadcrumbs={[
          { label: "الرئيسية", to: "/" },
          { label: "الطيران" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeader
                align="start"
                badge="اطلب عرض سعر"
                title="احجز تذكرة طيران خلال دقائق"
                subtitle="املأ التفاصيل وسنرسل أفضل الخيارات عبر واتساب — خدمة سريعة من طنجة."
              />
              <Card className="p-6 md:p-8">
                <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold">من</label>
                    <Input name="from" required placeholder="طنجة" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold">إلى</label>
                    <Input name="to" required placeholder="جدة / إسطنبول..." />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold">تاريخ السفر</label>
                    <Input name="date" type="date" required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold">عدد المسافرين</label>
                    <Input name="passengers" type="number" min={1} defaultValue={1} required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold">نوع الرحلة</label>
                    <Select name="trip" required defaultValue="ذهاب وإياب">
                      <option>ذهاب وإياب</option>
                      <option>ذهاب فقط</option>
                    </Select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold">الاسم</label>
                    <Input name="name" required placeholder="اسمك الكامل" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-bold">الهاتف</label>
                    <Input name="phone" required placeholder="06xxxxxxxx" />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" variant="whatsapp" className="w-full" size="lg">
                      <Plane className="h-4 w-4" />
                      أرسل طلب الحجز عبر واتساب
                    </Button>
                    {sent && (
                      <p className="mt-3 text-center text-sm font-semibold text-primary">
                        تم تجهيز طلبك! أكمل الإرسال من واتساب.
                      </p>
                    )}
                  </div>
                </form>
              </Card>
            </div>

            <div className="lg:col-span-5">
              <SectionHeader
                align="start"
                badge="عروض شائعة"
                title="وجهات مطلوبة من طنجة"
                className="mb-8"
              />
              <div className="space-y-4">
                {FLIGHT_OFFERS.map((offer, i) => (
                  <motion.div
                    key={`${offer.from}-${offer.to}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Card className="card-lift p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 font-extrabold text-emerald-deep">
                          <span>{offer.from}</span>
                          <ArrowLeftRight className="h-4 w-4 text-gold" />
                          <span>{offer.to}</span>
                        </div>
                        <Plane className="h-5 w-5 text-primary" />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                        <span>
                          {offer.airline} · {offer.type}
                        </span>
                        <span className="font-extrabold text-primary">{offer.price}</span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks
        items={[
          { to: "/umrah", label: "طيران العمرة" },
          { to: "/destinations/turkey", label: "طيران تركيا" },
          { to: "/destinations/dubai", label: "طيران دبي" },
          { to: "/contact", label: "تواصل مباشر" },
        ]}
      />

      <CTASection />
    </>
  );
}
