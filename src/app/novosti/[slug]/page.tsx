import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { news } from "@/data/news";
import Image from "next/image";

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const dateFormatter = new Intl.DateTimeFormat("hr-HR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((newsItem) => newsItem.slug === slug);

  if (!item) {
    return {
      title: "Novost nije pronađena | HGD Stjepan Radić",
    };
  }

  return {
    title: `${item.title} | HGD Stjepan Radić`,
    description: item.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params;
  const item = news.find((newsItem) => newsItem.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Container className="py-16 md:py-24">
        <article className="mx-auto max-w-4xl">
          <Link
            href="/novosti"
            className="inline-flex min-h-11 items-center rounded text-sm font-semibold text-burgundy transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            ← Sve novosti
          </Link>

          <header className="mt-10">
            <SectionEyebrow>{item.category}</SectionEyebrow>

            <time
              dateTime={item.date}
              className="block text-sm text-charcoal/50"
            >
              {dateFormatter.format(new Date(item.date))}
            </time>

            <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight italic text-burgundy md:text-5xl lg:text-6xl">
              {item.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/70 md:text-xl">
              {item.excerpt}
            </p>
          </header>

          <div className="relative mt-10 aspect-video overflow-hidden rounded-xl border-2 border-gold/35 bg-paper">
            <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                preload
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
            />

            <span
                aria-hidden="true"
                className="absolute inset-0 bg-burgundy/10"
            />
          </div>

          <div className="mt-10 space-y-6 rounded-lg border border-gold/30 bg-paper p-6 text-lg leading-relaxed text-charcoal/75 md:p-10">
            <div className="space-y-6 text-base leading-8 text-charcoal/80 md:text-lg">
              {item.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <footer className="mt-10 flex flex-col gap-4 border-t border-gold/30 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/novosti"
              className="inline-flex min-h-11 items-center self-start rounded font-semibold text-burgundy transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              ← Natrag na novosti
            </Link>

            <Link
              href="/#kontakt"
              className="inline-flex min-h-11 items-center self-start rounded border border-burgundy px-5 py-2 font-semibold text-burgundy transition-colors hover:bg-burgundy hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Kontaktirajte nas
            </Link>
          </footer>
        </article>
      </Container>
    </main>
  );
}