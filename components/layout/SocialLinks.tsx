import { socialLinks } from "@/config/site";
import { cn } from "@/lib/cn";

type SocialLinksProps = {
  className?: string;
  tone?: "light" | "dark";
  size?: "sm" | "md";
};

const sizeClasses = {
  sm: { button: "h-6 w-6", icon: "h-3 w-3" },
  md: { button: "h-8 w-8", icon: "h-3.5 w-3.5" },
};

/**
 * Suraksha24's social profile links, rendered as a row of icon buttons.
 * lucide-react doesn't ship brand/logo icons (dropped for trademark
 * reasons), so these are small inline SVGs — same approach already used
 * for LinkedIn/X in components/blog/ShareButtons.tsx.
 */
export default function SocialLinks({ className, tone = "dark", size = "md" }: SocialLinksProps) {
  const { button, icon } = sizeClasses[size];

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((social) => {
        const Icon = icons[social.icon];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Suraksha24 on ${social.label}`}
              className={cn(
                "flex items-center justify-center rounded-full border transition-colors duration-200",
                button,
                tone === "dark"
                  ? "border-cream/25 text-cream/75 hover:border-cream/50 hover:bg-cream/10 hover:text-cream"
                  : "border-forest/15 text-forest/70 hover:border-forest/40 hover:bg-forest/5 hover:text-forest",
              )}
            >
              <Icon className={icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

type IconProps = { className?: string };

const icons: Record<string, (props: IconProps) => React.ReactElement> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
};

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12c0-5.52-4.48-10-10-10Z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.5s-.23-1.64-.94-2.36c-.9-.94-1.9-.94-2.36-1C16.87 3 12 3 12 3h-.01s-4.87 0-8.19.15c-.46.05-1.46.06-2.36 1C.73 4.86.5 6.5.5 6.5S.27 8.42.27 10.34v1.32C.27 13.58.5 15.5.5 15.5s.23 1.64.94 2.36c.9.94 2.08.91 2.6 1.01 1.89.18 8 .24 8 .24s4.88-.01 8.2-.16c.46-.05 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.23-1.92.23-3.84v-1.32c0-1.92-.23-3.84-.23-3.84ZM9.75 14.9V7.98l6.5 3.46-6.5 3.46Z" />
    </svg>
  );
}
