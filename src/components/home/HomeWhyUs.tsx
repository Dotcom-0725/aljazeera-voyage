import { motion } from "framer-motion";
import { BadgeCheck, Heart, Shield, Zap } from "lucide-react";
import { WHY_US } from "../../data/site";
import { SectionHeader } from "../shared/SectionHeader";
import { Card } from "../ui/card";

const icons = {
  shield: Shield,
  badge: BadgeCheck,
  heart: Heart,
  zap: Zap,
} as const;

export function HomeWhyUs() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="لماذا نحن"
          title="ثقة تُبنى على تجربة حقيقية"
          subtitle="نضع راحة الحجاج والمعتمرين والعائلات في صميم كل تفصيل من تفاصيل رحلتكم."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] || Shield;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="card-lift h-full p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-emerald-deep">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
