'use client';

import { useState } from "react";
import type { FormEvent } from "react";

import { Container } from "@/components/ui/container";

type ContactInterest = "join" | "partnership";

const contactDetails = [
  {
    label: "E-mail",
    value: "Adresa za potvrdu",
  },
  {
    label: "Telefon",
    value: "Broj za potvrdu",
  },
  {
    label: "Adresa probe",
    value: "Žrnovnica — za potvrdu",
  },
  {
    label: "Kontakt osoba",
    value: "Ime za potvrdu",
  },
];

const socialPlatforms = ["Facebook", "YouTube", "Instagram"];

const fieldClassName =
  "mt-2 block w-full min-w-0 rounded border border-gold bg-white px-4 py-3 text-base text-charcoal placeholder:text-charcoal/45 disabled:cursor-not-allowed disabled:opacity-100";

const interestButtonClassName =
  "inline-flex min-h-11 w-full items-center justify-center rounded border border-burgundy px-4 py-3 text-sm font-semibold text-burgundy transition-colors hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold aria-pressed:bg-burgundy aria-pressed:text-gold sm:w-auto";

export function ContactSection() {
    const [interest, setInterest] = useState<ContactInterest>("join");

    const [formNotice, setFormNotice] = useState<string | null>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") ?? "").trim();
    const replyTo = String(formData.get("replyTo") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

        if (!name || !replyTo || !message) {
            setFormNotice(
            "Ispunite sva obavezna polja. Samo razmaci nisu dovoljni.",
            );
            return;
        }

        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo);

        const phoneDigits = replyTo.replace(/\D/g, "");

        const isPhone =
        /^\+?[0-9 ()-]+$/.test(replyTo) &&
        phoneDigits.length >= 7 &&
        phoneDigits.length <= 15;

        if (!isEmail && !isPhone) {
            setFormNotice(
                "Unesite e-mail adresu ili broj telefona u ispravnom obliku.",
            );
            return;
        }

        setFormNotice(
            "Obavezna polja su popunjena. Poruka nije poslana.",
        );
    }

  return (
    <section
      id="kontakt"
      aria-labelledby="contact-title"
      className="scroll-mt-24 bg-white text-charcoal"
    >
      <Container className="py-20 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gold">
              Kontakt
            </p>

            <h2
              id="contact-title"
              className="font-serif text-4xl italic text-burgundy md:text-5xl"
            >
              Razgovarajmo.
            </h2>

            <div
                role="group"
                aria-label="Tema upita"
                className="mt-10 flex flex-wrap gap-3"
                >
                <button
                    type="button"
                    aria-pressed={interest === "join"}
                    onClick={() => setInterest("join")}
                    className={interestButtonClassName}
                >
                    Želim se pridružiti orkestru
                </button>

                <button
                    type="button"
                    aria-pressed={interest === "partnership"}
                    onClick={() => setInterest("partnership")}
                    className={interestButtonClassName}
                >
                    Zanima me partnerstvo
                </button>
            </div>

            <dl className="mt-10 space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gold">
                    {detail.label}
                  </dt>

                  <dd className="mt-2 italic text-burgundy">
                    {detail.value}
                  </dd>
                </div>
              ))}

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gold">
                  Društvene mreže
                </dt>

                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-2">
                    {socialPlatforms.map((platform) => (
                      <li key={platform}>
                        <button
                          type="button"
                          disabled
                          className="inline-flex min-h-11 items-center justify-center rounded border border-gold px-3 py-2 text-sm text-burgundy disabled:cursor-not-allowed"
                        >
                          {platform}
                        </button>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          <form 
                aria-label="Kontakt obrazac"
                onSubmit={handleSubmit}
                onInput={() => setFormNotice(null)}>
            <p className="mb-5 text-sm text-charcoal/70">
                Sva polja su obavezna. Slanje poruke još nije omogućeno.
            </p>
            <fieldset className="min-w-0 space-y-5">
                <legend className="sr-only">Pošaljite nam poruku</legend>

                <div>
                    <label
                        htmlFor="contact-name"
                        className="block text-sm font-semibold text-burgundy"
                    >
                        Ime i prezime
                    </label>

                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Vaše ime"
                        required
                        className={fieldClassName}
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-reply-to"
                        className="block text-sm font-semibold text-burgundy"
                    >
                        Email ili telefon
                    </label>

                    <input
                        id="contact-reply-to"
                        name="replyTo"
                        type="text"
                        placeholder="Kako vas možemo kontaktirati"
                        required
                        className={fieldClassName}
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-interest"
                        className="block text-sm font-semibold text-burgundy"
                    >
                        Zanima me
                    </label>

                    <select
                        id="contact-interest"
                        name="interest"
                        value={interest}
                        onChange={(event) => {
                            const value = event.currentTarget.value;

                            if (value === "join" || value === "partnership") {
                            setInterest(value);
                            }
                        }}
                        className={fieldClassName}
                        >
                        <option value="join">Pridruživanje orkestru</option>
                        <option value="partnership">Partnerstvo</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="contact-message"
                        className="block text-sm font-semibold text-burgundy"
                    >
                        Poruka
                    </label>

                    <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Vaša poruka..."
                        required
                        className={`${fieldClassName} resize-y`}
                    />
                </div>

                <label
                htmlFor="contact-consent"
                className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/75"
                >
                    <input
                        id="contact-consent"
                        name="consent"
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 shrink-0 accent-burgundy disabled:cursor-not-allowed"
                    />

                    <span>
                        Prihvaćam da me orkestar kontaktira u vezi s ovim upitom.
                    </span>
                </label>

                <div className="pt-3">
                    <button
                        type="submit"
                        className="inline-flex min-h-11 w-full items-center justify-center rounded bg-burgundy px-6 py-4 text-lg font-semibold text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    >
                        Provjeri podatke
                    </button>
                </div>
            </fieldset>
            {formNotice && (
                <p
                    role="status"
                    className="mt-4 rounded border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-burgundy"
                >
                    {formNotice}
                </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}