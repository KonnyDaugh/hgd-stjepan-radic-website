"use client";

import { useState } from "react";

import { Container } from "@/components/ui/container";
import { ArchiveGallery } from "@/components/ui/archive-gallery";
import {
  archiveCategories,
  archiveEntries,
} from "@/data/archive";
import type { ArchiveCategoryId } from "@/data/archive";

const archiveDateFormatter = new Intl.DateTimeFormat("hr-HR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function ArchiveTimeline() {
  const [activeCategory, setActiveCategory] =
    useState<ArchiveCategoryId>("sve");

  const visibleEntries =
    activeCategory === "sve"
      ? archiveEntries
      : archiveEntries.filter((entry) =>
          entry.categories.includes(activeCategory),
        );

  const filteredEntries = [...visibleEntries].sort((a, b) => {
    if (a.year === null) return 1;
    if (b.year === null) return -1;

    return a.year - b.year;
  });

  const entriesByYear = Array.from(
    filteredEntries.reduce(
      (groups, entry) => {
        const entries = groups.get(entry.year) ?? [];

        groups.set(entry.year, [...entries, entry]);

        return groups;
      },
      new Map<
        number | null,
        (typeof filteredEntries)[number][]
      >(),
    ),
  );

  return (
    <section
      id="115-godina"
      className="scroll-mt-24 bg-gold/10 text-charcoal"
    >
      <Container className="py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              115 godina sjećanja
            </p>

            <h2 className="mt-6 font-serif text-4xl italic leading-tight text-burgundy sm:text-5xl lg:text-6xl">
              Naša povijest nije završena priča.
            </h2>
          </div>

          <div className="scrollbar-hidden -mx-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:px-0">
            <div className="flex w-max gap-3 lg:ml-auto">
              {archiveCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`min-h-11 rounded-full border px-5 font-semibold transition-colors ${
                    activeCategory === category.id
                      ? "border-burgundy bg-burgundy text-cream"
                      : "border-gold text-burgundy hover:bg-gold/15"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14" aria-live="polite">
          {entriesByYear.length > 0 ? (
            <ol className="space-y-12 border-l border-gold pl-8 md:pl-10">
              {entriesByYear.map(([year, entries]) => (
                <li
                  key={year ?? "undated"}
                  className="relative grid gap-5 md:grid-cols-[100px_minmax(0,1fr)] md:gap-10"
                >
                  <span
                    className="absolute -left-10 top-2 size-4 rounded-full border-2 border-gold bg-gold/20 md:-left-12"
                    aria-hidden="true"
                  />

                  <p
                    className={`font-serif text-gold ${
                      year === null
                        ? "text-2xl leading-tight"
                        : "text-4xl"
                    }`}
                  >
                    {year === null ? (
                      <>
                        <span className="block">Bez</span>
                        <span className="block">datuma</span>
                      </>
                    ) : (
                      year
                    )}
                  </p>

                  <div className="space-y-8">
                    {entries.map((entry) => (
                      <article
                        key={entry.id}
                        className="overflow-hidden rounded-lg border border-gold/50 bg-cream"
                      >
                        {entry.images.length > 0 && (
                          <div className="relative aspect-4/3 overflow-hidden sm:aspect-16/6 lg:aspect-5/1">
                            <ArchiveGallery images={entry.images} />
                          </div>
                        )}

                        <div className="p-6 sm:p-8">
                          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                              {entry.eyebrow}
                            </p>

                            {entry.date && (
                              <time
                                dateTime={entry.date}
                                className="text-sm text-charcoal/55"
                              >
                                {archiveDateFormatter.format(
                                  new Date(
                                    `${entry.date}T00:00:00Z`,
                                  ),
                                )}
                              </time>
                            )}
                          </div>

                          <h3 className="mt-3 font-serif text-3xl text-burgundy">
                            {entry.title}
                          </h3>

                          <p className="mt-4 leading-relaxed text-charcoal/75">
                            {entry.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <p className="rounded-lg border border-gold/50 bg-cream p-10 text-center text-charcoal/65">
              Trenutačno nema zapisa u ovoj kategoriji.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}