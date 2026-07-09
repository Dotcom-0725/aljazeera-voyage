import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import {
  SEO_PAGES,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
} from "../data/seo";
import { BLOG_ARTICLES } from "../data/blog";
import { IMAGES } from "../data/site";
import { useSeo } from "../hooks/useSeo";
import { PageHero } from "../components/shared/PageHero";
import { SectionHeader } from "../components/shared/SectionHeader";
import { CTASection } from "../components/shared/CTASection";
import { InternalLinks } from "../components/shared/InternalLinks";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { OptimizedImage } from "../components/shared/OptimizedImage";

export default function BlogPage() {
  useSeo({
    ...SEO_PAGES.blog,
    schemas: [
      buildOrganizationSchema(),
      buildBreadcrumbSchema([
        { name: "الرئيسية", path: "/" },
        { name: "المدونة", path: "/blog" },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        badge="مدونة SEO"
        title="مقالات العمرة والحج والسياحة للمغاربة"
        subtitle="محتوى موجّه لكلمات البحث: العمرة، الحج، تركيا، دبي، التأشيرات ونصائح السفر."
        image={IMAGES.hero}
        breadcrumbs={[
          { label: "الرئيسية", to: "/" },
          { label: "المدونة" },
        ]}
      />

      <section className="bg-luxury py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="محتوى يحوّل الزوار إلى عملاء"
            title="من مدونة الجزيرة ترافيل"
            subtitle="كل مقال يربط داخليًا بصفحات الخدمات والوجهات لرفع الترتيب والتحويل."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_ARTICLES.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Card className="card-lift group flex h-full flex-col overflow-hidden p-0">
                  <Link to={`/blog/${post.slug}`} className="relative h-48 overflow-hidden block">
                    <OptimizedImage
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full transition duration-700 group-hover:scale-110"
                    />
                    <Badge className="absolute right-3 top-3 bg-card/95 text-foreground border-0">
                      {post.category}
                    </Badge>
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5 text-gold" />
                        <time dateTime={post.dateISO}>{post.date}</time>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3.5 w-3.5 text-gold" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-base font-extrabold leading-7 text-emerald-deep">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-7 text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary"
                    >
                      اقرأ المقال كاملًا
                      <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                    </Link>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks
        items={[
          { to: "/umrah", label: "برامج العمرة" },
          { to: "/hajj", label: "برامج الحج" },
          { to: "/destinations/turkey", label: "تركيا" },
          { to: "/destinations/dubai", label: "دبي" },
        ]}
      />

      <CTASection />
    </>
  );
}
