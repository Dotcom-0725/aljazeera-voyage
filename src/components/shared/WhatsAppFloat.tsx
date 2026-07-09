import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../data/site";
import { trackWhatsAppClick } from "../../hooks/useSeo";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب مع وكالة الجزيرة ترافيل"
      onClick={() => trackWhatsAppClick("floating_button")}
      className="animate-pulse-soft fixed bottom-20 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25d366] to-[#128c3a] text-white shadow-[0_12px_30px_-6px_rgba(18,140,58,0.65)] transition-transform hover:scale-110 sm:bottom-7 sm:left-7 sm:h-16 sm:w-16 md:bottom-7"
    >
      <MessageCircle className="h-7 w-7 fill-white/20" />
      <span className="absolute -top-1 -right-1 flex h-5 w-5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-60" />
        <span className="relative inline-flex h-5 w-5 rounded-full bg-white/30" />
      </span>
    </a>
  );
}
