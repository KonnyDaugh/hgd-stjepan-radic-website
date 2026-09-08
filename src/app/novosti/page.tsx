import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { news } from "@/data/news";
import { NewsCard } from "@/components/news/news-card";

export const metadata: Metadata = {
  title: "Novosti | HGD Stjepan Radić",
  description:
    "Novosti, događanja i priče iz života HGD Stjepan Radić Žrnovnica.",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Container className="py-16 md:py-24">
        <Link
          href="/#novosti"
          className="inline-flex min-h-11 items-center rounded text-sm font-semibold text-burgundy transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          ← Naslovnica
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <SectionEyebrow>Novosti</SectionEyebrow>

            <h1 className="max-w-3xl font-serif text-4xl leading-tight italic text-burgundy md:text-5xl lg:text-6xl">
              Život našeg orkestra
            </h1>
          </div>

          <p className="max-w-xl leading-relaxed text-charcoal/70 lg:pb-2">
            Koncerti, događanja, priče i trenuci iz života HGD Stjepan Radić
            Žrnovnica.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
                <NewsCard key={item.slug} item={item} />
            ))}
        </div>
      </Container>
    </main>
  );
}