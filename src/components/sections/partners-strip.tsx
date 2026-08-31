import { Container } from "@/components/ui/container";

const partnerPlaceholders = [
  "Partner A",
  "Partner B",
  "Partner C",
  "Partner D",
  "Partner E",
];

export function PartnersStrip() {
  return (
    <section
      aria-labelledby="partners-title"
      className="bg-sand text-burgundy"
    >
      <Container className="py-16 text-center md:py-20">
        <h2
          id="partners-title"
          className="font-serif text-2xl italic md:text-3xl"
        >
          Hvala svima koji podržavaju našu glazbu.
        </h2>

        <ul className="mt-10 flex flex-wrap justify-center gap-4">
          {partnerPlaceholders.map((partner) => (
            <li
              key={partner}
              className="flex min-h-14 w-36 max-w-full items-center justify-center rounded border border-gold bg-white px-3 py-3 text-sm font-semibold tracking-wide text-gold"
            >
              {partner}
            </li>
          ))}
        </ul>

        <button
          type="button"
          disabled
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded border border-burgundy px-5 py-3 font-semibold disabled:cursor-not-allowed"
        >
          Postanite partner
        </button>
      </Container>
    </section>
  );
}