import { Container } from "@/components/ui/container";

export function LivingArchiveCta() {
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

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                disabled
                title="Funkcionalnost će biti dostupna uskoro"
                className="inline-flex min-h-14 items-center justify-center rounded bg-gold px-8 font-semibold text-charcoal disabled:cursor-not-allowed"
              >
                Prepoznajem nekoga
              </button>

              <button
                type="button"
                disabled
                title="Funkcionalnost će biti dostupna uskoro"
                className="inline-flex min-h-14 items-center justify-center rounded border border-cream/35 px-8 font-semibold text-cream disabled:cursor-not-allowed"
              >
                Podijeli uspomenu
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}