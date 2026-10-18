import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  CalendarRange,
  Clock3,
  Compass,
  Crown,
  HeartHandshake,
  Info,
  MapPin,
  Moon,
  Phone,
  Plane,
  School,
  ShieldCheck,
  Sun,
  Users,
} from "lucide-react";
import {
  GUIDANCE,
  OCCASION_PROGRAMS,
  RAMADAN,
  SAUDIA_ROUTES,
  UMRAH_IMAGES,
  UMRAH_PRICES,
  UMRAH_PRICE_NOTE,
  UMRAH_SECTIONS,
  VIP_POINTS,
  YEAR_ROUND,
  type UmrahSectionId,
} from "../../data/umrah";
import { SITE } from "../../data/site";
import { cn } from "../../utils/cn";
import { SectionHeader } from "../shared/SectionHeader";
import { OptimizedImage } from "../shared/OptimizedImage";
import { WhatsAppButton } from "../shared/WhatsAppButton";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ------------------------------------------------------------------ */
/* شريط التنقل بين أقسام صفحة العمرة                                    */
/* ------------------------------------------------------------------ */

export function UmrahSubNav() {
  return (
    <nav
      aria-label="أقسام برامج العمرة"
      className="sticky top-[62px] z-30 border-b border-border/70 bg-background/90 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto py-3">
          {UMRAH_SECTIONS.map((s) => (
            <li key={s.id} className="shrink-0">
              <button
                type="button"
                onClick={() => scrollToSection(s.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-bold transition-colors sm:text-sm",
                  s.id === "ramadan"
                    ? "border-gold/40 bg-gold-pale text-gold hover:bg-gold/15"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                )}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* بطاقة مسارات الرحلات المباشرة                                         */
/* ------------------------------------------------------------------ */

function RoutesCard({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-3xl border p-5 sm:p-6",
        dark
          ? "border-gold/25 bg-white/5 backdrop-blur-md"
          : "border-border bg-card shadow-luxury"
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-2xl",
            dark ? "bg-gold/15 text-gold-light" : "bg-secondary text-primary"
          )}
        >
          <Plane className="h-5 w-5" />
        </div>
        <div>
          <div className={cn("text-sm font-extrabold", dark ? "text-white" : "text-emerald-deep")}>
            رحلات جوية مباشرة
          </div>
          <div className={cn("text-xs", dark ? "text-white/65" : "text-muted-foreground")}>
            مع الخطوط الجوية السعودية
          </div>
        </div>
      </div>
      <ul className="space-y-2.5">
        {SAUDIA_ROUTES.map((r) => (
          <li
            key={r.from}
            className={cn(
              "flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-bold",
              dark ? "bg-white/5 text-white" : "bg-muted text-foreground"
            )}
          >
            <span>{r.from}</span>
            <span className="flex flex-1 items-center gap-1.5" aria-hidden>
              <span className={cn("h-px flex-1 border-t border-dashed", dark ? "border-gold/40" : "border-primary/30")} />
              <Plane className={cn("h-4 w-4 -scale-x-100", dark ? "text-gold-light" : "text-primary")} />
              <span className={cn("h-px flex-1 border-t border-dashed", dark ? "border-gold/40" : "border-primary/30")} />
            </span>
            <span className="sr-only">إلى</span>
            <span>{r.to}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NoteLine({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={cn(
        "flex items-start gap-2.5 rounded-2xl px-4 py-3 text-sm leading-7",
        dark
          ? "bg-white/5 text-white/75"
          : "border border-gold/25 bg-gold-pale/60 text-muted-foreground"
      )}
    >
      <Info className={cn("mt-1 h-4 w-4 shrink-0", dark ? "text-gold-light" : "text-gold")} />
      <span>{children}</span>
    </p>
  );
}

/** زر داخلي ينقل إلى قسم آخر في صفحة العمرة (أو يفتح الصفحة على القسم) */
export function UmrahSectionLink({
  section,
  label,
  variant = "outline",
  inPage = true,
  className,
}: {
  section: UmrahSectionId;
  label: string;
  variant?: "outline" | "outline-light" | "gold" | "default";
  inPage?: boolean;
  className?: string;
}) {
  if (inPage) {
    return (
      <Button variant={variant} className={className} onClick={() => scrollToSection(section)}>
        {label}
        <ArrowLeft className="h-4 w-4" />
      </Button>
    );
  }
  return (
    <Link to={`/umrah?section=${section}`} className={className}>
      <Button variant={variant}>
        {label}
        <ArrowLeft className="h-4 w-4" />
      </Button>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* 1. برامج العمرة على مدار السنة                                        */
/* ------------------------------------------------------------------ */

export function UmrahYearRound() {
  const facts = [
    {
      icon: CalendarRange,
      title: "على مدار السنة",
      value: "برامج عمرة منتظمة طوال أشهر السنة",
    },
    {
      icon: Clock3,
      title: "مدة البرنامج",
      value: YEAR_ROUND.durations.join(" أو "),
    },
    {
      icon: CalendarDays,
      title: "انتظام الرحلات",
      value: `${YEAR_ROUND.tripsPerMonth} إلى الديار المقدسة كل شهر`,
    },
    {
      icon: MapPin,
      title: "توزيع الإقامة",
      value: YEAR_ROUND.stay,
    },
  ];

  return (
    <section id="year-round" className="scroll-mt-32 bg-luxury py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              align="start"
              badge="البرامج العادية"
              title="برامج العمرة على مدار السنة"
              subtitle="ننظم برامج عمرة متنوعة طوال السنة، برحلات منتظمة كل شهر وإمكانية الانطلاق من طنجة أو الدار البيضاء."
              className="!mb-8"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {facts.map((f, i) => (
                <motion.div key={f.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
                  <Card className="h-full p-5">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-bold text-gold">{f.title}</div>
                    <div className="mt-1 text-sm font-bold leading-7 text-emerald-deep">{f.value}</div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <RoutesCard />
              <NoteLine>{YEAR_ROUND.note}</NoteLine>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <UmrahSectionLink section="prices" label="اطّلع على الأسعار" variant="default" />
              <WhatsAppButton
                message="السلام عليكم، أرغب في الحصول على عرض سعر لبرنامج عمرة (على مدار السنة)"
                label="اطلب عرض سعر"
                track="umrah_year_round"
              />
            </div>
          </div>

          <motion.div {...fadeUp} className="grid grid-cols-2 gap-4 lg:col-span-5 lg:pt-6">
            <div className="col-span-2 overflow-hidden rounded-3xl shadow-luxury">
              <OptimizedImage
                src={UMRAH_IMAGES.kaaba}
                alt="المسجد الحرام والكعبة المشرفة بمكة المكرمة"
                className="h-64 w-full sm:h-72"
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-luxury">
              <OptimizedImage
                src={UMRAH_IMAGES.medina}
                alt="المسجد النبوي الشريف بالمدينة المنورة"
                className="h-40 w-full sm:h-48"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs font-bold text-white">
                المدينة المنورة
              </span>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-luxury">
              <OptimizedImage
                src={UMRAH_IMAGES.kaabaAerial}
                alt="منظر جوي للمسجد الحرام بمكة المكرمة"
                className="h-40 w-full sm:h-48"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs font-bold text-white">
                مكة المكرمة
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. برامج العمرة خلال رمضان                                            */
/* ------------------------------------------------------------------ */

export function UmrahRamadan() {
  return (
    <section
      id="ramadan"
      className="relative scroll-mt-32 overflow-hidden bg-[#03261b] py-16 text-white md:py-24 dark:bg-[#020f0b]"
      aria-labelledby="ramadan-title"
    >
      <div className="absolute inset-0">
        <img
          src={UMRAH_IMAGES.kaabaAerial.replace("w=1200", "w=1400")}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03261b]/95 via-[#03261b]/80 to-[#03261b] dark:from-[#020f0b]/95 dark:via-[#020f0b]/85 dark:to-[#020f0b]" />
        <div className="pattern-islamic absolute inset-0 opacity-40" />
      </div>
      <div className="pointer-events-none absolute -top-24 left-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40">
            <Moon className="h-8 w-8 fill-gold-light/30 text-gold-light" />
          </div>
          <Badge className="mb-4 !bg-white/10 !text-gold-light border-gold/30">
            رمضان كريم
          </Badge>
          <h2 id="ramadan-title" className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]">
            برامج العمرة خلال شهر <span className="text-gold-gradient">رمضان المبارك</span>
          </h2>
          <div className="ornament-line mt-4" />
          <p className="mt-5 text-base leading-8 text-white/80 md:text-lg">
            عيشوا روحانية الشهر الفضيل في الديار المقدسة، مع عدة برامج وتواريخ سفر متعددة ومدد إقامة متنوعة.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          <motion.div {...fadeUp} className="space-y-6 lg:col-span-7">
            <ul className="space-y-3">
              {RAMADAN.points.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3.5 text-sm leading-7 text-white/90 md:text-base">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                  {p}
                </li>
              ))}
            </ul>

            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-gold-light">
                <Clock3 className="h-4 w-4" />
                مدد الإقامة المتوفرة
              </div>
              <div className="flex flex-wrap gap-2.5">
                {RAMADAN.durations.map((d, i) => (
                  <span
                    key={d}
                    className={cn(
                      "rounded-2xl border px-4 py-2.5 font-bold",
                      i < RAMADAN.durations.length - 1
                        ? "border-gold/40 bg-gold/10 text-lg text-gold-light"
                        : "border-white/15 bg-white/5 text-sm text-white/80"
                    )}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <RoutesCard dark />
            <NoteLine dark>{RAMADAN.note}</NoteLine>

            <div className="flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                message="السلام عليكم، أرغب في الاستفسار عن برامج العمرة خلال شهر رمضان (التواريخ والمدد والأسعار)"
                label="اطلب عرض سعر لرمضان"
                track="umrah_ramadan"
                variant="gold"
              />
              <a href={`tel:+${SITE.phoneIntl}`}>
                <Button variant="outline-light" className="w-full sm:w-auto">
                  <Phone className="h-4 w-4" />
                  اتصل بنا
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-2 gap-4 self-start lg:col-span-5">
            <figure className="col-span-2 overflow-hidden rounded-3xl ring-1 ring-gold/25">
              <OptimizedImage
                src={UMRAH_IMAGES.kaaba}
                alt="الكعبة المشرفة والمعتمرون في المسجد الحرام"
                className="h-60 w-full sm:h-72"
              />
            </figure>
            <figure className="relative col-span-2 overflow-hidden rounded-3xl ring-1 ring-gold/25 sm:col-span-1 lg:col-span-2">
              <OptimizedImage
                src={UMRAH_IMAGES.medina}
                alt="المسجد النبوي الشريف بالمدينة المنورة"
                className="h-48 w-full"
              />
              <figcaption className="absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs font-bold">
                المدينة المنورة
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. أسعار وبرامج العمرة                                               */
/* ------------------------------------------------------------------ */

export function UmrahPriceCards({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-3">
        {UMRAH_PRICES.map((p, i) => (
          <motion.div key={p.id} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
            <Card
              className={cn(
                "card-lift relative flex h-full flex-col overflow-hidden p-6 sm:p-7",
                i === 2 && "border-gold/40"
              )}
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gold-gradient" style={{ opacity: 0.45 + i * 0.25 }} />
              <div className="mb-4 flex items-center gap-1" aria-hidden>
                {Array.from({ length: i + 1 }).map((_, k) => (
                  <span key={k} className="h-2 w-2 rotate-45 bg-gold" />
                ))}
              </div>
              <h3 className="font-display text-xl font-bold text-emerald-deep md:text-2xl">{p.name}</h3>
              <div className="mt-5 text-xs font-bold text-muted-foreground">ابتداءً من</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-primary md:text-[2.6rem]" dir="ltr">
                  {p.price}
                </span>
                <span className="text-sm font-bold text-emerald-deep">درهم مغربي</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">للشخص الواحد</div>
              <div className="mt-auto pt-6">
                <WhatsAppButton
                  message={`السلام عليكم، أرغب في الحصول على عرض سعر ل${p.name} (ابتداءً من ${p.price} درهم للشخص)`}
                  label="اطلب عرض سعر"
                  track={`umrah_price_${p.id}`}
                  block
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className={cn("mx-auto mt-6", compact ? "max-w-4xl" : "max-w-5xl")}>
        <NoteLine>{UMRAH_PRICE_NOTE}</NoteLine>
      </div>
    </>
  );
}

export function UmrahPrices() {
  return (
    <section id="prices" className="scroll-mt-32 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="البرامج العادية على مدار السنة"
          title="أسعار وبرامج العمرة"
          subtitle="ثلاث فئات تناسب مختلف الميزانيات — قارنوا الأسعار الابتدائية واطلبوا عرض السعر النهائي."
        />
        <UmrahPriceCards />
        <p className="mt-5 text-center text-sm text-muted-foreground">
          هذه الأسعار خاصة بالبرامج العادية، أما أسعار برامج رمضان فتُحدَّد حسب كل برنامج.{" "}
          <button
            type="button"
            onClick={() => scrollToSection("ramadan")}
            className="font-bold text-primary underline-offset-4 hover:underline"
          >
            اكتشف برامج رمضان
          </button>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. برامج العمرة الخاصة وVIP                                           */
/* ------------------------------------------------------------------ */

export function UmrahVip() {
  return (
    <section id="vip" className="scroll-mt-32 py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[2rem] bg-emerald-gradient px-6 py-10 text-white shadow-emerald md:px-12 md:py-14"
        >
          <div className="pattern-islamic absolute inset-0 opacity-25" />
          <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full bg-gold/25 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-gold-light ring-1 ring-gold/30">
                <Crown className="h-4 w-4" />
                حسب الطلب
              </div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">برامج العمرة الخاصة وVIP</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
                نوفر إمكانية إعداد برامج عمرة حسب الطلب، وفق احتياجات العميل وتفضيلاته والميزانية المتاحة.
              </p>
            </div>
            <div className="lg:col-span-5">
              <ul className="space-y-3">
                {VIP_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm leading-7">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-gold-light" />
                    {p}
                  </li>
                ))}
              </ul>
              <WhatsAppButton
                message="السلام عليكم، أرغب في طلب برنامج عمرة خاص / VIP حسب احتياجاتي"
                label="اطلب برنامجك الخاص"
                track="umrah_vip"
                variant="gold"
                size="lg"
                className="mt-6"
                block
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. برامج العمرة خلال العطل والمناسبات                                  */
/* ------------------------------------------------------------------ */

const OCCASION_ICONS = { school: School, calendar: CalendarDays, sun: Sun, moon: Moon } as const;

export function UmrahOccasions() {
  return (
    <section id="occasions" className="scroll-mt-32 bg-luxury py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="عروض موسمية"
          title="برامج العمرة خلال العطل والمناسبات"
          subtitle="برامج تتماشى مع العطل والمناسبات — استفسروا عن التواريخ والتفاصيل المتاحة لكل عرض."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OCCASION_PROGRAMS.map((o, i) => {
            const Icon = OCCASION_ICONS[o.icon];
            return (
              <motion.div key={o.id} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
                <Card className="card-lift flex h-full flex-col p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-pale text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-extrabold leading-8 text-emerald-deep">{o.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{o.desc}</p>
                  <div className="mt-auto pt-5">
                    <WhatsAppButton
                      message={`السلام عليكم، أرغب في الاستفسار عن برنامج: ${o.title}`}
                      label="استفسر عن البرنامج"
                      track={`umrah_occasion_${o.id}`}
                      variant="outline"
                      block
                    />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. مرافقة وإرشاد المعتمرين                                            */
/* ------------------------------------------------------------------ */

const GUIDANCE_ICONS = { users: Users, heart: HeartHandshake, compass: Compass, shield: ShieldCheck } as const;

export function UmrahGuidance() {
  return (
    <section id="guidance" className="scroll-mt-32 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <motion.div {...fadeUp} className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] shadow-luxury">
              <OptimizedImage
                src={UMRAH_IMAGES.medina}
                alt="المسجد النبوي الشريف — مرافقة المعتمرين بالمدينة المنورة"
                className="h-72 w-full sm:h-96"
              />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-emerald-gradient px-5 py-3 text-sm font-bold text-white shadow-emerald">
              مكة المكرمة · المدينة المنورة
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <SectionHeader
              align="start"
              badge="التأطير والإرشاد"
              title="مرافقة وإرشاد المعتمرين في الديار المقدسة"
              className="!mb-6"
            />
            <motion.blockquote
              {...fadeUp}
              className="border-s-4 border-gold ps-5 text-base leading-9 text-foreground/85 md:text-lg"
            >
              {GUIDANCE.text}
            </motion.blockquote>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {GUIDANCE.features.map((f) => {
                const Icon = GUIDANCE_ICONS[f.icon];
                return (
                  <div key={f.title} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold leading-6 text-emerald-deep">{f.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
