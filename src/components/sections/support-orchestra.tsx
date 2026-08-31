import { Container } from "@/components/ui/container";
import { supportNeeds } from "@/data/support-needs";

const partnerBenefits = [
  "Ime i logo partnera na web stranici",
  "Zahvala u koncertnim materijalima",
  "Javno priznanje na nastupu",
  "Partnerski logo",
];

export function SupportOrchestra() {
  return (
    <section
      id="podrzi"
      aria-labelledby="support-title"
      className="scroll-mt-24 bg-burgundy text-cream"
    >
      <Container className="py-20 md:py-28">
        <div className="grid items-start gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gold">
              Podržite orkestar
            </p>

            <h2
              id="support-title"
              className="max-w-2xl font-serif text-4xl leading-tight italic md:text-5xl lg:text-6xl"
            >
              Pomozite nam napisati
              <br className="hidden sm:block" /> sljedeće poglavlje.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-cream/65">
            Vaša podrška pomaže nam obnoviti instrumente, organizirati
            koncerte, putovati i prenositi ljubav prema glazbi novim
            generacijama.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {supportNeeds.map((need) => (
            <li
              key={need.id}
              className={`flex flex-col rounded-xl border-t-4 bg-cream p-6 text-charcoal sm:p-8 ${
                need.featured ? "border-gold" : "border-transparent"
              }`}
            >
              <span className="text-3xl" aria-hidden="true">
                {need.icon}
              </span>

              <h3 className="mt-6 font-serif text-2xl text-burgundy">
                {need.title}
              </h3>

              <p className="mt-3 leading-relaxed text-charcoal/75">
                {need.description}
              </p>

              <div className="mt-auto pt-5">
                <p className="text-sm italic text-charcoal/60">
                  Iznos za potvrdu
                </p>

                <button
                  type="button"
                  disabled
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded border border-gold px-5 py-3 font-semibold text-burgundy disabled:cursor-not-allowed sm:w-auto"
                >
                  Želim pomoći
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-14 grid gap-10 border-t border-gold/20 pt-14 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
                <h3 className="font-serif text-3xl italic text-gold">
                Zahvalnost našim partnerima
                </h3>

                <p className="mt-5 text-sm leading-relaxed italic text-cream/60">
                Navedene pogodnosti za potvrdu s upravom orkestra prije objave.
                </p>

                <ul className="mt-6 space-y-3">
                {partnerBenefits.map((benefit) => (
                    <li
                    key={benefit}
                    className="flex items-start gap-3 text-cream/70"
                    >
                    <span
                        aria-hidden="true"
                        className="mt-1 text-xs text-gold"
                    >
                        ◆
                    </span>

                    <span>{benefit}</span>
                    </li>
                ))}
                </ul>
            </div>

            <div className="flex flex-col gap-3">
                <button
                type="button"
                disabled
                className="inline-flex min-h-11 w-full items-center justify-center rounded bg-gold px-6 py-4 text-center font-semibold text-charcoal disabled:cursor-not-allowed"
                >
                Razgovarajmo o partnerstvu
                </button>

                <button
                type="button"
                disabled
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded border border-gold/30 px-6 py-4 text-center text-cream/70 disabled:cursor-not-allowed"
                >
                <span aria-hidden="true">↓</span>
                Preuzmi predstavljanje orkestra
                </button>
            </div>
        </div>
      </Container>
    </section>
  );
}