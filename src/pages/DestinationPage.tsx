import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  MessageCircle,
  Sparkles,
  Wallet,
} from "lucide-react";
import { getDestination } from "../data/destinations";
import {
  SEO_PAGES,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildProductOfferSchema,
} from "../data/seo";
import { whatsappLink } from "../data/site";
import { useSeo, trackLead, trackWhatsAppClick } from "../hooks/useSeo";
import { PageHero } from "../components/shared/PageHero";
import { SectionHeader } from "../components/shared/SectionHeader";
import { CTASection } from "../components/shared/CTASection";
import { InternalLinks } from "../components/shared/InternalLinks";
import { Accordion } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export default function DestinationPage() {
  const { slug } = useParams();
  const destination = slug ? getDestination(slug) : undefined;
  const seo = destination ? SEO_PAGES[destination.seoKey] : undefined;

  useSeo(
    destination && seo
      ? {
          ...seo,
          schemas: [
            buildOrganizationSchema(),
            buildBreadcrumbSchema([
              { name: "الرئيسية", path: "/" },
              { name: "الرحلات", path: "/tours" },
              { name: destination.name, path: `/destinations/${destination.slug}` },
            ]),
            buildProductOfferSchema({
              name: `رحلة ${destination.name} من المغرب`,
              description: destination.summary,
              image: destination.heroImage,
              price: destination.priceFrom,
              path: `/destinations/${destination.slug}`,
            }),
            buildFaqSchema(destination.faq),
          ],
        }
      : {
          title: "وجهة غير موجودة | وكالة الجزيرة ترافيل",
          description: "الوجهة المطلوبة غير متوفرة.",
          keywords: "",
          path: "/tours",
          noindex: true,
        }
  );

  if (!destination) return <Navigate to="/tours" replace />;

  const wa = whatsappLink(destination.whatsappMessage);

  return (
    <>
      <PageHero
        badge={`رحلات ${destination.country} من المغرب`}
        title={`رحلة ${destination.name} من طنجة`}
        subtitle={destination.summary}
        image={destination.heroImage}
        breadcrumbs={[
          { label: "الرئيسية", to: "/" },
          { label: "الرحلات", to: "/tours" },
          { label: destination.name },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-8 flex flex-wrap gap-3">
                <Badge variant="gold">{destination.badge}</Badge>
                <Badge variant="soft">
                  <Clock3 className="h-3.5 w-3.5" />
                  {destination.duration}
                </Badge>
                <Badge variant="soft">
                  <Wallet className="h-3.5 w-3.5" />
                  من {destination.priceFrom}
                </Badge>
              </div>

              <SectionHeader
                align="start"
                className="mb-8"
                badge="لماذا هذه الوجهة؟"
                title={`${destination.name}… تجربة مصممة للمغاربة`}
                subtitle={destination.summary}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {destination.highlights.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card className="flex items-start gap-3 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-semibold leading-7">{item}</span>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-14">
                <h2 className="font-display text-2xl font-bold text-emerald-deep md:text-3xl">
                  ماذا تشمل الباقة؟
                </h2>
                <div className="ornament-line-start mt-4" />
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {destination.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-3 text-sm"
                    >
                      <Sparkles className="h-4 w-4 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-14">
                <h2 className="font-display text-2xl font-bold text-emerald-deep md:text-3xl">
                  برنامج الرحلة المقترح
                </h2>
                <div className="ornament-line-start mt-4" />
                <ol className="mt-6 space-y-4">
                  {destination.itinerary.map((day) => (
                    <li key={day.day}>
                      <Card className="p-5">
                        <div className="text-xs font-bold text-gold">{day.day}</div>
                        <h3 className="mt-1 text-lg font-extrabold text-emerald-deep">
                          {day.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {day.desc}
                        </p>
                      </Card>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-14">
                <h2 className="mb-5 font-display text-2xl font-bold text-emerald-deep">
                  أسئلة شائعة عن رحلة {destination.name}
                </h2>
                <Accordion items={destination.faq} />
              </div>
            </div>

            <aside className="lg:col-span-4">
              <Card className="sticky top-28 overflow-hidden border-primary/15 p-0 shadow-luxury">
                <div className="bg-emerald-gradient p-6 text-white">
                  <div className="text-sm text-white/75">يبدأ السعر من</div>
                  <div className="font-display text-3xl font-bold text-gold-light">
                    {destination.priceFrom}
                  </div>
                  <div className="mt-1 text-sm text-white/80">{destination.duration}</div>
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-sm leading-7 text-muted-foreground">
                    احصل على عرض سعر مخصص خلال دقائق — بدون التزام. فريق طنجة
                    جاهز لمساعدتك عبر واتساب.
                  </p>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={() => {
                      trackWhatsAppClick(`destination_${destination.slug}`);
                      trackLead(`destination_${destination.slug}`);
                    }}
                  >
                    <Button variant="whatsapp" className="w-full" size="lg">
                      <MessageCircle className="h-5 w-5" />
                      احجز / اطلب عرض واتساب
                    </Button>
                  </a>
                  <Link to="/contact" className="block">
                    <Button variant="outline" className="w-full">
                      تواصل مع المكتب بطنجة
                    </Button>
                  </Link>
                  <div className="rounded-2xl bg-secondary/60 p-4 text-xs leading-6 text-muted-foreground">
                    <strong className="text-foreground">عرض محدود:</strong> أرسل
                    عدد المسافرين والتاريخ التقريبي لتصلك أفضل الخيارات فورًا.
                  </div>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <InternalLinks
        title="روابط داخلية مهمة"
        items={destination.relatedLinks.map((l) => ({
          to: l.to,
          label: l.label,
        }))}
      />

      <CTASection
        title={`جاهز لرحلة ${destination.name}؟`}
        subtitle="أرسل رسالة واتساب الآن واحصل على برنامج وسعر واضح يناسب عائلتك."
      />
    </>
  );
}
