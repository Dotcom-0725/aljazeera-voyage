import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../../data/site";
import { SectionHeader } from "../shared/SectionHeader";

export function HomeTestimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-emerald-gradient" />
      <div className="pattern-islamic absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          light
          badge="آراء عملائنا"
          title="ثقة العائلات المغربية مصدر فخرنا"
          subtitle="قصص حقيقية من حجاج ومعتمرين ومسافرين اختاروا وكالة الجزيرة ترافيل."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, index) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass relative rounded-[1.75rem] p-6 shadow-luxury"
            >
              <Quote className="absolute left-5 top-5 h-8 w-8 text-gold/35" />
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-8 text-slate-700 dark:text-slate-200">
                “{t.text}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-5 dark:border-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-gradient font-display text-lg font-bold text-gold-light">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-extrabold text-[#064e3b] dark:text-emerald-100">
                    {t.name}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {t.city}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
