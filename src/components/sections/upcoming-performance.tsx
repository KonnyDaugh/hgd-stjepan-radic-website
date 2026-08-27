import Image from "next/image";

import { Container } from "@/components/ui/container";
import { upcomingEvent } from "@/data/upcoming-event";

export function UpcomingPerformance() {
    const eventDetails = [
        {
            label: "Lokacija",
            value: upcomingEvent.venue ?? "Za potvrdu",
        },
        {
            label: "Datum",
            value: upcomingEvent.date ?? upcomingEvent.monthLabel,
        },
        {
            label: "Sat",
            value: upcomingEvent.time ?? "Za potvrdu",
        },
        {
            label: "Ulaz",
            value: upcomingEvent.admission ?? "Za potvrdu",
        },
    ];
    return (
        <section
        id="dogadanja"
        className="scroll-mt-24 bg-white text-charcoal"
        >
        <Container className="py-20 md:py-28">
            <h2 className="font-serif text-5xl italic text-burgundy sm:text-6xl lg:text-7xl">
            Vidimo se u prosincu.
            </h2>

            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
                <article className="overflow-hidden rounded-lg border border-gold">
                    <div className="relative aspect-4/3 overflow-hidden sm:aspect-2/1">
                        <Image
                            src="/images/next-performance.webp"
                            alt="Nastup HGD-a „Stjepan Radić“"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                        />

                        <div
                            className="absolute inset-0 bg-burgundy/65"
                            aria-hidden="true"
                        />

                        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                            <p className="font-serif text-4xl text-gold sm:text-5xl">
                            Prosinac
                            </p>

                            <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-gold">
                            2026.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 sm:p-8">
                        <span className="inline-flex rounded-full bg-gold/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-burgundy">
                            Uskoro
                        </span>

                        <h3 className="mt-6 font-serif text-3xl text-burgundy">
                            {upcomingEvent.title}
                        </h3>

                        <p className="mt-4 leading-relaxed text-charcoal/70">
                            {upcomingEvent.announcement}
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <button
                            type="button"
                            disabled
                            className="inline-flex min-h-12 items-center justify-center rounded bg-gold/15 px-5 font-semibold text-charcoal/35 disabled:cursor-not-allowed"
                            >
                            + Dodaj u kalendar
                            </button>

                            <a
                            href="#posljednji-nastup"
                            className="inline-flex min-h-12 items-center justify-center rounded bg-burgundy px-5 font-semibold text-gold transition-colors hover:bg-gold hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
                            >
                            Pogledaj posljednji nastup
                            </a>
                        </div>
                    </div>
                </article>
                <div className="self-start">
                    <h3 className="font-serif text-3xl italic text-burgundy sm:text-4xl">
                        Želite li saznati datum čim bude objavljen?
                    </h3>

                    <p className="mt-5 leading-relaxed text-charcoal/70">
                        Prijavite se za obavijest i bit ćete među prvima koji će
                        saznati sve detalje o nadolazećem koncertu HGD-a „Stjepan
                        Radić“.
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
                        <label htmlFor="notification-email" className="sr-only">
                        Vaša e-pošta
                        </label>

                        <input
                        id="notification-email"
                        type="email"
                        placeholder="Vaša e-pošta"
                        disabled
                        className="min-h-14 rounded border border-gold bg-white px-5 text-charcoal outline-none placeholder:text-charcoal/40 disabled:cursor-not-allowed disabled:opacity-100"
                        />

                        <button
                        type="button"
                        disabled
                        title="Prijave za obavijesti još nisu aktivirane"
                        className="min-h-14 rounded bg-gold px-7 font-semibold text-charcoal disabled:cursor-not-allowed"
                        >
                        Pošalji mi obavijest
                        </button>
                    </div>

                    <dl className="mt-10 grid gap-4 sm:grid-cols-2">
                        {eventDetails.map((detail) => (
                        <div
                            key={detail.label}
                            className="rounded-lg bg-gold/10 p-6"
                        >
                            <dt className="text-xs font-semibold uppercase tracking-widest text-gold">
                            {detail.label}
                            </dt>

                            <dd className="mt-3 font-serif text-2xl text-burgundy">
                            {detail.value}
                            </dd>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>
        </Container>
        </section>
    );
}