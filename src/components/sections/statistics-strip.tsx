import { Container } from "@/components/ui/container";
import { statistics } from "@/data/statistics";

export function StatisticsStrip() {
  return (
    <section
      className="bg-burgundy text-cream"
      aria-label="Statistika orkestra"
    >
      <Container className="py-12 md:py-16">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((statistic) => (
            <li
              key={statistic.label}
              className="border-l border-gold/30 pl-5"
            >
              <p className="font-serif text-5xl text-gold">
                {statistic.value}
              </p>

              <p className="mt-2 font-semibold">{statistic.label}</p>

              <p className="mt-1 text-sm text-cream/60">
                {statistic.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}