import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Globe2,
  MoonStar,
  Plane,
  ScrollText,
} from "lucide-react";
import { SERVICES } from "../../data/site";
import { SectionHeader } from "../shared/SectionHeader";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

const icons = {
  kaaba: Building2,
  moon: MoonStar,
  globe: Globe2,
  plane: Plane,
  passport: ScrollText,
} as const;

export function HomeServices() {
  return (
    <section className="relative bg-luxury py-20 md:py-28">
      <div className="pattern-islamic pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="خدماتنا المميزة"
          title="كل ما تحتاجه لرحلة متكاملة"
          subtitle="نقدم باقة شاملة من الخدمات الفاخرة لتأمين رحلة روحية أو سياحية بأعلى معايير الجودة."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons] || Globe2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <Link to={service.to} className="block h-full">
                  <Card className="card-lift group relative h-full overflow-hidden p-6 md:p-7">
                    <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-gold/15 to-transparent blur-2xl" />
                    <div className="relative">
                      <div className="mb-5 flex items-start justify-between gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-gradient text-gold-light shadow-emerald">
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="soft">اكتشف</Badge>
                      </div>
                      <h3 className="text-xl font-extrabold text-emerald-deep">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-[15px]">
                        {service.desc}
                      </p>
                      <div className="mt-6 text-sm font-bold text-primary opacity-0 transition group-hover:opacity-100">
                        اعرف المزيد ←
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
