"use client";

import { useState } from "react";

import {ArchiveContributionModal, type ContributionType } from "@/components/archive/archive-contribution-modal";

import { Container } from "@/components/ui/container";

export function LivingArchiveCta() {
  const [contributionType, setContributionType] = useState<ContributionType | null>(null);

  return (
    <section
      id="zivuci-arhiv"
      className="bg-gold/10 text-cream"
      aria-labelledby="living-archive-title"
    >
      <Container className="pb-20 md:pb-28">
        <div className="relative overflow-hidden rounded-2xl bg-burgundy px-6 py-14 sm:px-10 md:px-16 md:py-16 lg:px-20 lg:py-20">
          <div
            className="pointer-events-none absolute -right-28 -top-32 size-80 rounded-full border border-gold/10 sm:size-96"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Živući arhiv
            </p>

            <h2
              id="living-archive-title"
              className="mt-7 font-serif text-4xl italic leading-tight text-cream sm:text-5xl"
            >
              Prepoznajete li nekoga?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-cream/65">
              Pomozite nam sačuvati povijest orkestra. Ako
              prepoznajete osobu, događaj ili godinu na fotografiji,
              pošaljite nam svoje sjećanje.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setContributionType("recognition")}
                className="inline-flex min-h-12 items-center justify-center rounded bg-gold px-6 py-3 font-semibold text-charcoal transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Prepoznajem nekoga
              </button>

              <button
                type="button"
                onClick={() => setContributionType("memory")}
                className="inline-flex min-h-12 items-center justify-center rounded border border-cream/40 px-6 py-3 font-semibold text-cream transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Podijeli uspomenu
              </button>
            </div>
          </div>
        </div>
      </Container>
      <ArchiveContributionModal
        key={contributionType ?? "closed"}
        type={contributionType}
        onClose={() => setContributionType(null)}
      />
    </section>
  );
}