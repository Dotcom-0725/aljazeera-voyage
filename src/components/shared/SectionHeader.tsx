import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { Badge } from "../ui/badge";

type Props = {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "start";
  className?: string;
};

export function SectionHeader({
  badge,
  title,
  subtitle,
  light = false,
  align = "center",
  className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-start",
        className
      )}
    >
      {badge && (
        <Badge
          variant="gold"
          className={cn("mb-4", align === "center" && "mx-auto")}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-emerald-deep"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-4",
          align === "center" ? "ornament-line" : "ornament-line-start"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-5 max-w-2xl text-base leading-8 md:text-lg",
            light ? "text-white/80" : "text-muted-foreground",
            align === "start" && "mx-0"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
