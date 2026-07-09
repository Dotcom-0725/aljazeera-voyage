import { motion } from "framer-motion";
import { CheckCircle2, Heart, Shield, Users } from "lucide-react";
import {
  SEO_PAGES,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
} from "../data/seo";
import { IMAGES, SITE, STATS } from "../data/site";
import { useSeo } from "../hooks/useSeo";
import { PageHero } from "../components/shared/PageHero";
import { SectionHeader } from "../components/shared/SectionHeader";
import { CTASection } from "../components/shared/CTASection";
import { InternalLinks } from "../components/shared/InternalLinks";
import { Card } from "../components/ui/card";
import { OptimizedImage } from "../components/shared/OptimizedImage";

const values = [
  {
    icon: Shield,
    title: "الثقة والأمان",
    desc: "التزام كامل بالشفافية وحماية حقوق عملائنا في كل خطوة.",
  },
  {
    icon: Heart,
    title: "خدمة إنسانية",
    desc: "نعتني بكل حاج ومعتمر كفرد من العائلة باهتمام صادق.",
  },
  {
    icon: Users,
    title: "خبرة ميدانية",
    desc: "سنوات من تنظيم الرحلات للعائلات المغربية من طنجة.",
  },
];

export default function AboutPage() {
  useSeo({
    ...SEO_PAGES.about,
    schemas: [
      buildOrganizationSchema(),
      buildBreadcrumbSchema([
        { name: "الرئيسية", path: "/" },
        { name: "من نحن", path: "/about" },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        badge="من نحن"
        title="وكالة أسفار طنجة موثوقة للعائلات"
        subtitle="من قلب طنجة، نرافق العائلات والحجاج والسياح بروح مغربية أصيلة ومعايير عالمية."
        image={IMAGES.about}
        breadcrumbs={[
          { label: "الرئيسية", to: "/" },
          { label: "من نحن" },
        ]}
      />

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-luxury">
                <OptimizedImage
                  src={IMAGES.mosque}
                  alt="وكالة الجزيرة ترافيل بطنجة — تجربة سفر فاخرة"
                  className="aspect-[5/6] w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/70 via-transparent to-transparent" />
              </div>
              <div className="glass absolute -bottom-6 left-4 right-4 rounded-3xl p-4 shadow-luxury sm:left-auto sm:right-6 sm:w-64 animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-gradient text-gold-light">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-emerald-deep">
                      معتمدون وموثوقون
                    </div>
                    <div className="text-xs text-muted-foreground">
                      تنظيم محترف منذ أكثر من عقد
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div>
              <SectionHeader
                align="start"
                badge="قصتنا"
                title="وكالة الحج والعمرة والسياحة في طنجة"
                subtitle="نؤمن أن رحلة العمرة أو الحج ليست مجرد سفر، بل تجربة روحية تستحق العناية الفائقة."
              />
              <p className="mb-6 text-[15px] leading-8 text-muted-foreground">
                من مقرنا بدوار النجمة بطنجة، نخدم العائلات المغربية ببرامج عمرة وحج
                وسياحة مصممة بعناية. يشرف على التواصل والمتابعة السيد{" "}
                <strong className="text-foreground">{SITE.contactPerson}</strong>{" "}
                وفريق متخصص يحرص على راحتكم من لحظة الاستفسار حتى العودة بسلام.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {values.map((item) => (
                  <Card key={item.title} className="p-4">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-extrabold text-emerald-deep">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-6 text-muted-foreground">
                      {item.desc}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 overflow-hidden rounded-[2rem] bg-emerald-gradient p-1 shadow-emerald">
            <div className="pattern-islamic rounded-[1.85rem]">
              <div className="grid grid-cols-2 gap-px md:grid-cols-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="px-4 py-8 text-center sm:py-10">
                    <div className="font-display text-3xl font-bold text-gold-light md:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks
        items={[
          { to: "/umrah", label: "برامج العمرة", desc: "وكالة عمرة طنجة" },
          { to: "/hajj", label: "برامج الحج", desc: "الحج المغرب" },
          { to: "/tours", label: "الرحلات السياحية", desc: "تركيا ودبي والمزيد" },
          { to: "/contact", label: "تواصل معنا", desc: "0671872273" },
        ]}
      />

      <CTASection />
    </>
  );
}
