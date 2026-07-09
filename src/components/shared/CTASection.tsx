import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../data/site";
import { trackLead, trackWhatsAppClick } from "../../hooks/useSeo";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function CTASection({
  title = "جاهزون لتنظيم رحلتكم بكل راحة؟",
  subtitle = "فريق وكالة الجزيرة ترافيل بانتظاركم لاستشارة مجانية واختيار البرنامج الأنسب لكم.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative py-10 md:py-14" aria-labelledby="cta-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-emerald-gradient px-6 py-10 shadow-emerald md:px-12 md:py-14"
        >
          <div className="pattern-islamic absolute inset-0 opacity-20" />
          <div className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-gold/25 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-right">
            <div className="max-w-2xl">
              <Badge className="mb-4 !bg-white/10 !text-gold-light border-white/10">
                تحويل فوري عبر واتساب
              </Badge>
              <h2
                id="cta-title"
                className="font-display text-2xl font-bold text-white md:text-3xl lg:text-4xl"
              >
                {title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/75 md:text-base">
                {subtitle}
              </p>
            </div>
            <a
              href={whatsappLink(
                "السلام عليكم، أرغب في استشارة مجانية لحجز رحلتي مع وكالة الجزيرة ترافيل"
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick("cta_section");
                trackLead("cta_section");
              }}
            >
              <Button variant="gold" size="lg">
                <MessageCircle className="h-5 w-5" />
                احجز استشارتك الآن
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
