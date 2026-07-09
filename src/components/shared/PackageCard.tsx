import { CalendarDays, Clock3, Hotel, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { PackageItem } from "../../data/site";
import { whatsappLink } from "../../data/site";
import { trackLead, trackWhatsAppClick } from "../../hooks/useSeo";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { OptimizedImage } from "./OptimizedImage";

type Props = {
  pkg: PackageItem;
  index?: number;
};

export function PackageCard({ pkg, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="card-lift group flex h-full flex-col overflow-hidden border-border/80 bg-card p-0">
        <div className="relative h-52 overflow-hidden sm:h-56">
          <OptimizedImage
            src={pkg.image}
            alt={`${pkg.name} — ${pkg.destination}`}
            className="h-full w-full transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          {pkg.tag && (
            <Badge className="absolute right-4 top-4 bg-gold-gradient text-accent-foreground border-0 shadow-gold">
              {pkg.tag}
            </Badge>
          )}
          <div className="absolute bottom-4 right-4 left-4">
            <h3 className="font-display text-2xl font-bold text-white">
              {pkg.name}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-5 space-y-2.5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{pkg.destination}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock3 className="h-4 w-4 text-primary" />
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CalendarDays className="h-4 w-4 text-primary" />
              <span>المغادرة: {pkg.departure}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Hotel className="h-4 w-4 text-primary" />
              <span>{pkg.hotel}</span>
            </div>
          </div>

          {pkg.features?.length > 0 && (
            <ul className="mb-6 space-y-2">
              {pkg.features.slice(0, 4).map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto border-t border-border pt-5">
            <div className="mb-4">
              <div className="text-xs font-semibold text-muted-foreground">
                السعر يبدأ من
              </div>
              <div className="text-xl font-extrabold text-emerald-deep">
                {pkg.price}
              </div>
            </div>
<a
                    href={whatsappLink(
                      `السلام عليكم، أرغب في الاستفسار عن باقة ${pkg.name} — ${pkg.destination}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={() => {
                      trackWhatsAppClick(`package_${pkg.id}`);
                      trackLead(`package_${pkg.id}`);
                    }}
                  >
                    <Button variant="whatsapp" className="w-full">
                      احجز عبر واتساب
                    </Button>
                  </a>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
