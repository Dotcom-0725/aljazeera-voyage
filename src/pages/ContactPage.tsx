import { FormEvent, useState } from "react";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  UserRound,
} from "lucide-react";
import {
  SEO_PAGES,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
} from "../data/seo";
import { IMAGES, SITE, whatsappLink } from "../data/site";
import { useSeo, trackLead, trackWhatsAppClick } from "../hooks/useSeo";
import { PageHero } from "../components/shared/PageHero";
import { SectionHeader } from "../components/shared/SectionHeader";
import { InternalLinks } from "../components/shared/InternalLinks";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input, Select, Textarea } from "../components/ui/input";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  useSeo({
    ...SEO_PAGES.contact,
    schemas: [
      buildOrganizationSchema(),
      buildBreadcrumbSchema([
        { name: "الرئيسية", path: "/" },
        { name: "اتصل بنا", path: "/contact" },
      ]),
    ],
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `رسالة تواصل — وكالة أسفار طنجة:
الاسم: ${data.get("name")}
الهاتف: ${data.get("phone")}
البريد: ${data.get("email") || "-"}
الخدمة: ${data.get("service")}
الرسالة: ${data.get("message")}`;
    trackLead("contact_form");
    trackWhatsAppClick("contact_form");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        badge="وكالة أسفار طنجة"
        title="اتصل بنا — دوار النجمة، طنجة"
        subtitle="زورونا أو راسلوا السيد محمد عثمان على واتساب 0671872273 للحصول على عرض فوري."
        image={IMAGES.about}
        breadcrumbs={[
          { label: "الرئيسية", to: "/" },
          { label: "اتصل بنا" },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="معلومات NAP للسيو المحلي"
            title="تواصل مع وكالة الجزيرة ترافيل"
            subtitle="اسم · عنوان · هاتف متطابق عبر الموقع والخرائط لتعزيز Local SEO."
          />

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              {[
                {
                  icon: MapPin,
                  title: "العنوان",
                  value: SITE.address,
                  detail: "NAP: دوار النجمة، طنجة، المغرب",
                },
                {
                  icon: Phone,
                  title: "الهاتف / واتساب",
                  value: SITE.phoneDisplay,
                  detail: `+${SITE.phoneIntl}`,
                  href: `tel:+${SITE.phoneIntl}`,
                },
                {
                  icon: UserRound,
                  title: "المسؤول",
                  value: SITE.contactPerson,
                  detail: "متابعة شخصية للحجوزات والاستشارات",
                },
                {
                  icon: Clock3,
                  title: "أوقات العمل",
                  value: SITE.workingHours.weekdays,
                  detail: `${SITE.workingHours.friday} · ${SITE.workingHours.sunday}`,
                },
                {
                  icon: Mail,
                  title: "البريد الإلكتروني",
                  value: SITE.email,
                  detail: "نرد خلال 24 ساعة عمل",
                },
              ].map((item) => (
                <Card key={item.title} className="flex gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground">
                      {item.title}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block font-extrabold text-emerald-deep hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="mt-1 font-extrabold text-emerald-deep">
                        {item.value}
                      </div>
                    )}
                    <div className="mt-1 text-sm text-muted-foreground">
                      {item.detail}
                    </div>
                  </div>
                </Card>
              ))}

              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("contact_direct")}
                >
                  <Button variant="whatsapp">
                    <MessageCircle className="h-4 w-4" />
                    واتساب مباشر
                  </Button>
                </a>
                <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <MapPin className="h-4 w-4" />
                    Google Maps
                  </Button>
                </a>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-7">
              <Card className="p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-emerald-deep">
                  نموذج تواصل عالي التحويل
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  يفتح واتساب مباشرة برسالتك — أقصر طريق للحجز.
                </p>
                <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold">الاسم الكامل</label>
                    <Input name="name" required placeholder="مثال: أحمد العلوي" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold">رقم الهاتف</label>
                    <Input name="phone" required type="tel" placeholder="06xxxxxxxx" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold">البريد (اختياري)</label>
                    <Input name="email" type="email" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold">نوع الخدمة</label>
                    <Select name="service" required defaultValue="">
                      <option value="" disabled>
                        اختر الخدمة
                      </option>
                      <option value="عمرة">برامج العمرة</option>
                      <option value="حج">برامج الحج</option>
                      <option value="تركيا">رحلات تركيا</option>
                      <option value="دبي">رحلات دبي</option>
                      <option value="طيران">حجز طيران</option>
                      <option value="تأشيرة">تأشيرات</option>
                    </Select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-bold">رسالتك</label>
                    <Textarea
                      name="message"
                      required
                      placeholder="أخبرنا بالتاريخ وعدد المسافرين وميزانيتك..."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" variant="gold" className="w-full" size="lg">
                      <MessageCircle className="h-4 w-4" />
                      إرسال عبر واتساب الآن
                    </Button>
                    {sent && (
                      <p className="mt-3 text-center text-sm font-semibold text-primary">
                        تم تجهيز رسالتك! أكمل الإرسال من نافذة واتساب.
                      </p>
                    )}
                  </div>
                </form>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="border-b border-border px-5 py-4">
                  <h2 className="font-extrabold text-emerald-deep">
                    موقعنا على Google Maps
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{SITE.address}</p>
                </div>
                <div className="aspect-[16/11] w-full bg-muted">
                  <iframe
                    title="خريطة وكالة الجزيرة ترافيل - دوار النجمة طنجة"
                    src={SITE.mapsEmbed}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks
        items={[
          { to: "/umrah", label: "عمرة طنجة" },
          { to: "/hajj", label: "الحج المغرب" },
          { to: "/destinations/turkey", label: "تركيا" },
          { to: "/destinations/dubai", label: "دبي" },
        ]}
      />
    </>
  );
}
