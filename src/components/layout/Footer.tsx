import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE, whatsappLink } from "../../data/site";
import { Button } from "../ui/button";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gold-light transition hover:bg-white/15"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#042f22] text-white dark:bg-[#031a14]">
      <div className="pattern-islamic absolute inset-0 opacity-15" />
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-gold/30">
                <span className="font-display text-xl font-bold text-gold-light">ج</span>
              </div>
              <div>
                <div className="font-extrabold">{SITE.name}</div>
                <div className="text-xs text-gold-light/80">
                  {SITE.city} · {SITE.country}
                </div>
              </div>
            </div>
            <p className="text-sm leading-7 text-white/70">{SITE.description}</p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block"
            >
              <Button variant="gold" size="sm">
                واتساب مباشر
              </Button>
            </a>
          </div>

          <div>
            <h4 className="mb-4 font-extrabold text-gold-light">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 transition hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-extrabold text-gold-light">خدمات ووجهات</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link to="/umrah" className="hover:text-gold-light">
                  وكالة عمرة طنجة
                </Link>
              </li>
              <li>
                <Link to="/hajj" className="hover:text-gold-light">
                  الحج المغرب
                </Link>
              </li>
              <li>
                <Link to="/destinations/turkey" className="hover:text-gold-light">
                  رحلات تركيا من المغرب
                </Link>
              </li>
              <li>
                <Link to="/destinations/dubai" className="hover:text-gold-light">
                  رحلات دبي من المغرب
                </Link>
              </li>
              <li>
                <Link to="/flights" className="hover:text-gold-light">
                  حجز تذاكر الطيران طنجة
                </Link>
              </li>
              <li>
                <Link to="/visa" className="hover:text-gold-light">
                  استخراج التأشيرات طنجة
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold-light">
                  مدونة السفر
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-extrabold text-gold-light">تواصل</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-light" />
                {SITE.address}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-light" />
                <a href={`tel:+${SITE.phoneIntl}`} className="hover:text-gold-light">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-light" />
                {SITE.email}
              </li>
              <li className="text-white/60">
                المسؤول: <span className="text-white/85">{SITE.contactPerson}</span>
              </li>
            </ul>

            <div className="mt-5 flex gap-2">
              <SocialIcon href={SITE.social.facebook} label="فيسبوك">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v7h4v-7h3.1l.9-4H13V9c0-.6.4-1 1-1z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={SITE.social.instagram} label="إنستغرام">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zM17.5 7.75a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={SITE.social.youtube} label="يوتيوب">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M23 12.2s0-3.1-.4-4.5a2.9 2.9 0 0 0-2-2C18.9 5.2 12 5.2 12 5.2s-6.9 0-8.6.5a2.9 2.9 0 0 0-2 2C1 9.1 1 12.2 1 12.2s0 3.1.4 4.5a2.9 2.9 0 0 0 2 2c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.9 2.9 0 0 0 2-2c.4-1.4.4-4.5.4-4.5zM9.8 15.5v-6.6l5.8 3.3-5.8 3.3z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-right">
          <p>
            © {new Date().getFullYear()} {SITE.name}. جميع الحقوق محفوظة.
          </p>
          <p className="text-white/40">دوار النجمة، طنجة · تصميم فاخر لتجربة سفر راقية</p>
        </div>
      </div>
    </footer>
  );
}
