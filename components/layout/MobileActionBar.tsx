import Link from "next/link";
import { Phone, MessageCircle, MessageSquarePlus } from "lucide-react";
import { contact } from "@/config/site";

/** Fixed bottom action bar shown only on small screens (replaces the floating WhatsApp button there). */
export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 divide-x divide-cream/15 border-t border-cream/10 bg-linear-to-r from-forest via-forest-light via-60% to-teal text-cream sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a href={contact.phoneHref} className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium">
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call
      </a>
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        WhatsApp
      </a>
      <Link href="/contact" className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium">
        <MessageSquarePlus className="h-5 w-5" aria-hidden="true" />
        Enquire
      </Link>
    </div>
  );
}
