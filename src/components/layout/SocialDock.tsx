import { site, whatsappUrl } from "@/content/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

export function SocialDock() {
  return (
    <aside className="social-dock" aria-label="Quick social actions">
      <a
        className="instagram-pop"
        href={site.instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Open Hanaz Modelling on Instagram"
      >
        <InstagramIcon />
      </a>
      <a className="whatsapp-pop" href={whatsappUrl()} aria-label="Open WhatsApp enquiry">
        <WhatsAppIcon />
      </a>
    </aside>
  );
}
