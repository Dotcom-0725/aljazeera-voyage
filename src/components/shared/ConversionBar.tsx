import { MessageCircle, Phone } from "lucide-react";
import { SITE, whatsappLink } from "../../data/site";
import { trackWhatsAppClick } from "../../hooks/useSeo";
import { Button } from "../ui/button";

export function ConversionBar({
  message,
  label = "استشارة مجانية عبر واتساب",
}: {
  message?: string;
  label?: string;
}) {
  const href = whatsappLink(message);

  return (
    <aside
      className="sticky bottom-0 z-40 border-t border-border/80 bg-background/95 backdrop-blur-xl md:hidden"
      aria-label="شريط التحويل السريع"
    >
      <div className="flex items-center gap-2 px-3 py-2.5">
        <a href={`tel:+${SITE.phoneIntl}`} className="flex-1">
          <Button variant="outline" className="w-full !rounded-2xl">
            <Phone className="h-4 w-4" />
            اتصال
          </Button>
        </a>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4]"
          onClick={() => trackWhatsAppClick(label)}
        >
          <Button variant="whatsapp" className="w-full !rounded-2xl">
            <MessageCircle className="h-4 w-4" />
            واتساب
          </Button>
        </a>
      </div>
    </aside>
  );
}
