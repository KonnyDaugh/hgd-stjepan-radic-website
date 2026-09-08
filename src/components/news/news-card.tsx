import Image from "next/image";
import Link from "next/link";

import type { NewsItem } from "@/data/news";

type NewsCardProps = {
  item: NewsItem;
};

const dateFormatter = new Intl.DateTimeFormat("hr-HR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-lg border-2 border-gold/35 bg-paper transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_16px_40px_rgba(91,15,44,0.10)]">
      <Link
        href={`/novosti/${item.slug}`}
        className="flex h-full flex-col rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        <span className="relative block aspect-16/10 overflow-hidden bg-burgundy">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span
            aria-hidden="true"
            className="absolute inset-0 bg-burgundy/10 transition-colors duration-300 group-hover:bg-burgundy/25"
          />
        </span>

        <span className="flex flex-1 flex-col p-6 md:p-8">
          <span className="flex flex-wrap items-center justify-between gap-3 border-b border-gold/25 pb-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              {item.category}
            </span>

            <time
              dateTime={item.date}
              className="text-sm text-charcoal/50"
            >
              {dateFormatter.format(new Date(item.date))}
            </time>
          </span>

          <span className="mt-7 block font-serif text-2xl leading-tight text-burgundy">
            {item.title}
          </span>

          <span className="mt-5 block flex-1 leading-relaxed text-charcoal/70">
            {item.excerpt}
          </span>

          <span className="mt-8 inline-flex min-h-11 items-center self-start text-sm font-semibold uppercase tracking-wide text-burgundy transition-colors group-hover:text-gold">
            Pročitaj više

            <span
              aria-hidden="true"
              className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </span>
      </Link>
    </article>
  );
}