import type { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
};

export function SectionEyebrow({ children }: SectionEyebrowProps) {
  return (
    <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
      <span className="h-px w-6 bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}