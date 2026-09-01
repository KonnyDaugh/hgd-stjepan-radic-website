import Image from "next/image";

import { Container } from "@/components/ui/container";
import { InstrumentQuiz } from "@/components/ui/instrument-quiz";

const joinSteps = [
  "Javite nam se",
  "Dođite na probnu probu",
  "Odaberite instrument",
  "Učite uz pomoć iskusnih glazbenika",
  "Postanite dio orkestra",
];

const benefits = [
  "Iskustvo nije potrebno",
  "Nema članarine",
  "Instrument se može osigurati",
  "Pomoć pri učenju",
  "Djeca i odrasli",
  "Prijateljska probna proba",
];

export function JoinOrchestra() {
  return (
    <section
      id="pridruzi-se"
      className="scroll-mt-24 bg-white text-charcoal"
      aria-labelledby="join-orchestra-title"
    >
      <Container className="py-20 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Pridruži nam se
            </p>

            <h2
              id="join-orchestra-title"
              className="mt-6 font-serif text-4xl italic leading-tight text-burgundy sm:text-5xl xl:text-6xl"
            >
              Nikad nije prerano
              <br className="hidden sm:block" /> ni prekasno za
              glazbu.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-charcoal/75">
              Primamo djecu i odrasle, s iskustvom ili bez njega.
              Možete doći na probnu probu, upoznati glazbenike i
              pronaći instrument koji vam odgovara.
            </p>

            <ol className="mt-10 space-y-3" role="list">
              {joinSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-4"
                >
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-burgundy font-serif text-lg text-gold"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>

                  <span className="text-lg text-charcoal/80">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <dl className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-cream p-5">
                <dt className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Adresa probe
                </dt>

                <dd className="mt-2 text-burgundy">
                  Za potvrdu
                </dd>
              </div>

              <div className="rounded-lg bg-cream p-5">
                <dt className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Vrijeme probe
                </dt>

                <dd className="mt-2 text-burgundy">
                  Za potvrdu
                </dd>
              </div>
            </dl>

            <ul
              className="mt-8 flex flex-wrap gap-2"
              role="list"
            >
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-full border border-gold bg-gold/20 px-4 py-2 text-sm text-burgundy"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl sm:aspect-12/5">
                    <Image
                        src="/images/orchestra-today-detail-1.webp"
                        alt=""
                        fill
                        sizes="(min-width: 1280px) 568px, (min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>

                <div className="rounded-2xl border-l-4 border-gold bg-burgundy p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                        Poseban poziv
                    </p>

                    <h3 className="mt-5 font-serif text-3xl text-cream">
                        Posebno tražimo flautiste
                    </h3>

                    <p className="mt-5 leading-relaxed text-cream/65">
                        Flaute su nam trenutačno posebno potrebne, ali dobrodošli su
                        svirači svih instrumenata.
                    </p>

                    <button
                        type="button"
                        disabled
                        title="Prijava će biti dostupna uskoro"
                        className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded bg-gold px-6 py-3 font-semibold text-charcoal disabled:cursor-not-allowed sm:w-auto"
                    >
                        Prijavi dolazak na probu
                    </button>
                </div>

                <div className="rounded-2xl border border-gold bg-cream p-6 sm:p-8">
                    <h3 className="font-serif text-2xl italic text-burgundy sm:text-3xl">
                        Koji bi instrument mogao biti tvoj?
                    </h3>

                    <p className="mt-5 leading-relaxed text-charcoal/75">
                        Odgovori na nekoliko kratkih pitanja i upoznaj instrumente
                        našeg orkestra.
                    </p>

                    <div className="mt-6">
                      <InstrumentQuiz />
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
}