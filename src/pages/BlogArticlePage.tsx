import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock3, MessageCircle } from "lucide-react";
import { getArticleBySlug, BLOG_ARTICLES } from "../data/blog";
import {
  SEO_PAGES,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
} from "../data/seo";
import { whatsappLink } from "../data/site";
import { useSeo, trackWhatsAppClick } from "../hooks/useSeo";
import { PageHero } from "../components/shared/PageHero";
import { CTASection } from "../components/shared/CTASection";
import { InternalLinks } from "../components/shared/InternalLinks";
import { Accordion } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { OptimizedImage } from "../components/shared/OptimizedImage";

export default function BlogArticlePage() {
  const { slug } = useParams();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useSeo(
    article
      ? {
          title: `${article.title} | وكالة الجزيرة ترافيل`,
          description: article.description,
          keywords: article.keywords,
          path: `/blog/${article.slug}`,
          ogImage: article.image,
          ogType: "article",
          schemas: [
            buildOrganizationSchema(),
            buildBreadcrumbSchema([
              { name: "الرئيسية", path: "/" },
              { name: "المدونة", path: "/blog" },
              { name: article.title, path: `/blog/${article.slug}` },
            ]),
            buildArticleSchema({
              title: article.title,
              description: article.description,
              image: article.image,
              datePublished: article.dateISO,
              path: `/blog/${article.slug}`,
            }),
            buildFaqSchema(article.faq),
          ],
        }
      : {
          ...SEO_PAGES.blog,
          title: "مقال غير موجود | وكالة الجزيرة ترافيل",
          noindex: true,
        }
  );

  if (!article) return <Navigate to="/blog" replace />;

  const related = BLOG_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <>
      <PageHero
        badge={article.category}
        title={article.title}
        subtitle={article.excerpt}
        image={article.image}
        breadcrumbs={[
          { label: "الرئيسية", to: "/" },
          { label: "المدونة", to: "/blog" },
          { label: article.category },
        ]}
      />

      <article className="py-16 md:py-20" itemScope itemType="https://schema.org/Article">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-8">
            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-gold" />
                <time dateTime={article.dateISO} itemProp="datePublished">
                  {article.date}
                </time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4 text-gold" />
                {article.readTime} قراءة
              </span>
              <Badge variant="soft">{article.category}</Badge>
            </div>

            <div className="mb-8 overflow-hidden rounded-[1.75rem] shadow-luxury">
              <OptimizedImage
                src={article.image}
                alt={article.title}
                className="aspect-[16/9] w-full"
                priority
              />
            </div>

            <div className="prose-article space-y-5" itemProp="articleBody">
              {article.content.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="font-display text-2xl font-bold text-emerald-deep md:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3 key={i} className="text-xl font-extrabold text-emerald-deep">
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="space-y-2 pr-1">
                      {block.items?.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[15px] leading-8 text-muted-foreground"
                        >
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-[15px] leading-8 text-muted-foreground md:text-base">
                    {block.text}
                  </p>
                );
              })}
            </div>

            <Card className="mt-10 border-primary/15 bg-secondary/40 p-6">
              <h3 className="font-display text-2xl font-bold text-emerald-deep">
                هل أنت مستعد للخطوة التالية؟
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                احصل على استشارة مجانية وخطة سفر واضحة خلال دقائق عبر واتساب.
              </p>
              <a
                href={whatsappLink(`قرأت مقال: ${article.title} وأرغب في الاستفسار`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block"
                onClick={() => trackWhatsAppClick(`blog_${article.slug}`)}
              >
                <Button variant="whatsapp" size="lg">
                  <MessageCircle className="h-5 w-5" />
                  اطلب استشارة مجانية الآن
                </Button>
              </a>
            </Card>

            {article.faq.length > 0 && (
              <section className="mt-12" aria-labelledby="article-faq">
                <h2
                  id="article-faq"
                  className="mb-5 font-display text-2xl font-bold text-emerald-deep"
                >
                  أسئلة شائعة حول الموضوع
                </h2>
                <Accordion items={article.faq} />
              </section>
            )}
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <Card className="sticky top-28 p-5">
              <h3 className="font-extrabold text-emerald-deep">مقالات ذات صلة</h3>
              <div className="mt-4 space-y-4">
                {related.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group flex gap-3"
                  >
                    <OptimizedImage
                      src={post.image}
                      alt=""
                      className="h-16 w-16 shrink-0 rounded-xl"
                    />
                    <div>
                      <div className="text-sm font-bold leading-6 text-foreground group-hover:text-primary">
                        {post.title}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{post.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                to="/blog"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                كل المقالات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Card>
          </aside>
        </div>
      </article>

      <InternalLinks
        title="صفحات مرتبطة بهذا المقال"
        items={article.relatedTo.map((to) => ({
          to,
          label:
            to === "/umrah"
              ? "برامج العمرة"
              : to === "/hajj"
                ? "برامج الحج"
                : to === "/visa"
                  ? "التأشيرات"
                  : to === "/tours"
                    ? "الرحلات"
                    : to === "/flights"
                      ? "الطيران"
                      : to === "/contact"
                        ? "اتصل بنا"
                        : to.includes("turkey")
                          ? "رحلة تركيا"
                          : to.includes("dubai")
                            ? "رحلة دبي"
                            : "اكتشف المزيد",
          desc: "انتقال سريع لصفحة الخدمة أو الوجهة",
        }))}
      />

      <CTASection />
    </>
  );
}
