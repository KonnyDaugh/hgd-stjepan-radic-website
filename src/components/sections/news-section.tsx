import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { news } from "@/data/news";
import { NewsCard } from "@/components/news/news-card";



export default function NewsSection() {
  const latestNews = news.slice(0, 3);

  return (
    <section
      id="novosti"
      aria-labelledby="news-title"
      className="scroll-mt-24 bg-cream text-charcoal"
    >
      <Container className="py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <SectionEyebrow>Novosti</SectionEyebrow>

            <h2
              id="news-title"
              className="max-w-3xl font-serif text-4xl leading-tight italic text-burgundy md:text-5xl lg:text-6xl"
            >
              Što se događa u orkestru?
            </h2>
          </div>

          <p className="max-w-xl leading-relaxed text-charcoal/70 lg:pb-2">
            Život orkestra nije samo glazba. Pratite naše koncerte,
            događanja i priče koje čine HGD Stjepan Radić.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        
            {latestNews.map((item) => (
                <NewsCard key={item.slug} item={item} />
            ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/novosti"
            className="inline-flex min-h-12 items-center justify-center rounded border border-burgundy px-7 py-3 text-sm font-semibold uppercase tracking-wide text-burgundy transition-colors hover:bg-burgundy hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Sve novosti
          </Link>
        </div>
      </Container>
    </section>
  );
}