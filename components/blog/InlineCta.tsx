import { Phone, MessageCircle } from "lucide-react";
import { blogCta, contact } from "@/config/site";
import Button from "@/components/ui/Button";

/** Soft, on-brand CTA dropped mid/end of every article. */
export default function InlineCta() {
  return (
    <div className="not-prose my-10 rounded-2xl border border-forest/10 bg-surface-alt p-7 text-center sm:p-9">
      <p className="font-display text-xl text-forest sm:text-2xl">{blogCta.heading}</p>
      <p className="mx-auto mt-2 max-w-md text-[15px] text-muted">{blogCta.body}</p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href={contact.phoneHref} size="md">
          <Phone className="h-4 w-4" aria-hidden="true" />
          {contact.phoneDisplay}
        </Button>
        <Button href={contact.whatsappHref} variant="secondary" size="md" external>
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp us
        </Button>
      </div>
    </div>
  );
}
