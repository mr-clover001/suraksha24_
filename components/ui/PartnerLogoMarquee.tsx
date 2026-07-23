import Image from "next/image";
import { Building2 } from "lucide-react";
import { partnerLogos, type PartnerLogoEntry } from "@/config/site";
import { publicFileExists } from "@/lib/publicFileExists";

function LogoTile({ entry }: { entry: PartnerLogoEntry }) {
  const hasLogo = publicFileExists(entry.logo);

  return (
    <li
      title={entry.name}
      className="mx-9 flex h-20 shrink-0 items-center sm:h-24 lg:h-28"
    >
      {hasLogo ? (
        <Image
          src={entry.logo}
          alt={entry.name}
          width={entry.width}
          height={entry.height}
          sizes="280px"
          className="h-full w-auto object-contain"
        />
      ) : (
        <span className="flex items-center gap-2 text-sm font-medium text-forest/70">
          <Building2 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          {entry.name}
        </span>
      )}
    </li>
  );
}

/**
 * Continuous horizontal marquee of real partner logos, shared between the
 * homepage "Our partners" section and the /partner page. The track list is
 * duplicated once and the CSS animation translates by exactly -50%, so the
 * loop is seamless — pauses on hover and entirely under prefers-reduced-motion.
 */
export default function PartnerLogoMarquee() {
  const track = [...partnerLogos, ...partnerLogos];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul className="animate-marquee flex w-max items-center py-2 hover:[animation-play-state:paused]">
        {track.map((entry, index) => (
          <LogoTile key={`${entry.slug}-${index}`} entry={entry} />
        ))}
      </ul>
    </div>
  );
}
