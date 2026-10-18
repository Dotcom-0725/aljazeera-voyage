import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../data/site";
import { trackLead, trackWhatsAppClick } from "../../hooks/useSeo";
import { cn } from "../../utils/cn";
import { Button, type ButtonProps } from "../ui/button";

type Props = {
  message: string;
  label: string;
  track: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  block?: boolean;
};

/** زر يفتح واتساب الوكالة برسالة جاهزة مع تتبع النقرة */
export function WhatsAppButton({
  message,
  label,
  track,
  variant = "whatsapp",
  size,
  className,
  block = false,
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(block ? "block" : "inline-block", className)}
      onClick={() => {
        trackWhatsAppClick(track);
        trackLead(track);
      }}
    >
      <Button variant={variant} size={size} className={cn(block && "w-full")}>
        <MessageCircle className="h-4 w-4" />
        {label}
      </Button>
    </a>
  );
}
