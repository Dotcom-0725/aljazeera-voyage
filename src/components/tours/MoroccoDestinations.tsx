import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { MOROCCO_DESTINATIONS, MOROCCO_IMAGE_CREDITS } from "../../data/morocco";
import { SITE } from "../../data/site";
import { SectionHeader } from "../shared/SectionHeader";
import { OptimizedImage } from "../shared/OptimizedImage";
import { WhatsAppButton } from "../shared/WhatsAppButton";
import { Card } from "../ui/card";

type Props = {
  limit?: number;
  showCredits?: boolean;
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

export function MoroccoDestinations({ limit, showCredits = true, id = "morocco", className, children }: Props) {
  const items = limit ? MOROCCO_DESTINATIONS.slice(0, limit) : MOROCCO_DESTINATIONS;

  return (
    <section id={id} className={className ?? "scroll-mt-24 bg-luxury py-16 md:py-24"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="السياحة الداخلية"
          title={`اكتشف المغرب مع ${SITE.shortName} للأسفار`}
          subtitle="من كثبان الصحراء إلى شواطئ الأطلسي وجبال الأطلس والمدن العتيقة — اختاروا وجهتكم ونجهّز لكم برنامجاً سياحياً حسب طلبكم."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((d, i) => (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            >
              <Card className="card-lift group flex h-full flex-col overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={d.image}
                    alt={d.imageAlt}
                    width={960}
                    height={640}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 right-4 left-4 text-white">
                    <div className="flex items-center gap-1 text-xs text-gold-light">
                      <MapPin className="h-3.5 w-3.5" />
                      {d.region}
                    </div>
                    <h3 className="font-display text-2xl font-bold">{d.name}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-7 text-muted-foreground">{d.desc}</p>
                  <div className="mt-auto pt-5">
                    <WhatsAppButton
                      message={`السلام عليكم، أرغب في طلب برنامج سياحي إلى ${d.name}`}
                      label="اطلب برنامجاً سياحياً"
                      track={`morocco_${d.id}`}
                      variant="outline"
                      block
                    />
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        {children}

        {showCredits && (
          <details className="mt-8 text-xs text-muted-foreground">
            <summary className="cursor-pointer select-none font-semibold">مصادر الصور</summary>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {MOROCCO_IMAGE_CREDITS.map((c) => (
                <li key={c.place}>
                  {c.place}:{" "}
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline" dir="ltr">
                    {c.author} — {c.license}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </section>
  );
}
