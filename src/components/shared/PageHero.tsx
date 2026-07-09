import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";

type Props = {
  title: string;
  subtitle?: string;
  badge?: string;
  image: string;
  breadcrumbs?: { label: string; to?: string }[];
};

export function PageHero({ title, subtitle, badge, image, breadcrumbs }: Props) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/85 via-[#064e3b]/75 to-[#064e3b]/95 dark:from-black/80 dark:via-black/75 dark:to-[#071510]" />
        <div className="pattern-islamic absolute inset-0 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav aria-label="مسار التنقل" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              {breadcrumbs.map((b, i) => (
                <li key={b.label} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/40">/</span>}
                  {b.to ? (
                    <Link to={b.to} className="hover:text-gold-light transition">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-gold-light">{b.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {badge && (
            <Badge className="mb-4 !bg-white/10 !text-gold-light border-white/15">
              {badge}
            </Badge>
          )}
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
