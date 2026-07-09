import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Shield, Users, ArrowLeft } from "lucide-react";
import { IMAGES, SITE, STATS, whatsappLink } from "../../data/site";
import { trackLead, trackWhatsAppClick } from "../../hooks/useSeo";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="وكالة عمرة طنجة — الكعبة المشرفة والحجاج مع وكالة الجزيرة ترافيل"
          className="h-full w-full object-cover animate-slow-zoom"
          width={1800}
          height={1000}
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/85 via-[#064e3b]/55 to-[#064e3b]/92" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/25" />
        <div className="pattern-islamic absolute inset-0 opacity-40" />
      </div>

      <div className="pointer-events-none absolute -left-20 top-28 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-24 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 !bg-white/10 !text-gold-light border-white/15 backdrop-blur-md">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gold-light" />
              وكالة معتمدة · {SITE.city}، {SITE.country}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.25] text-white sm:text-5xl md:text-6xl lg:text-[4.1rem]"
          >
            رحلتك إلى بيت الله
            <span className="mt-2 block text-gold-gradient">تبدأ معنا</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg md:text-xl md:leading-9"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={whatsappLink(
                "السلام عليكم، أرغب في الاستفسار عن وكالة أسفار طنجة — العمرة/الحج/السياحة"
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick("home_hero");
                trackLead("home_hero");
              }}
            >
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" />
                احجز عبر واتساب
              </Button>
            </a>
            <Link to="/umrah">
              <Button variant="outline-light" size="lg">
                اكتشف برامج العمرة
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <div className="glass-dark flex items-center gap-2.5 rounded-2xl px-4 py-2.5 text-sm text-white/90">
              <Shield className="h-[18px] w-[18px] text-gold-light" />
              موثوقية واحترافية
            </div>
            <div className="glass-dark flex items-center gap-2.5 rounded-2xl px-4 py-2.5 text-sm text-white/90">
              <Users className="h-[18px] w-[18px] text-gold-light" />
              خبرة مع العائلات المغربية
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {STATS.map((item) => (
            <div
              key={item.label}
              className="glass rounded-2xl border border-white/20 px-4 py-4 text-center shadow-luxury"
            >
              <div className="font-display text-2xl font-bold text-[#064e3b] sm:text-3xl dark:text-emerald-100">
                {item.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-600 sm:text-sm dark:text-slate-300">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 90" className="w-full text-background" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,48 C240,90 480,0 720,32 C960,64 1200,90 1440,40 L1440,90 L0,90 Z"
          />
        </svg>
      </div>
    </section>
  );
}
