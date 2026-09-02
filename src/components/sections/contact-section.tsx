'use client';

import type { SubmitEvent } from "react";
import { useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";


type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

type ContactInterest = "join" | "partnership";

type ContactErrors = {
  name?: string;
  replyTo?: string;
  message?: string;
  consent?: string;
};

const contactDetails: ContactDetail[] = [
  {
    label: "E-mail",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    label: "Telefon",
    value: siteConfig.contact.phone.label,
    href: siteConfig.contact.phone.href,
  },
  {
    label: "Adresa probe",
    value: siteConfig.contact.address.label,
    href: siteConfig.contact.address.href,
    external: true,
  },
  {
    label: "Kontakt osoba",
    value: "Goran Kovačević",
  },
];

const fieldClassName =
  "mt-2 block w-full min-w-0 rounded border border-gold bg-white px-4 py-3 text-base text-charcoal placeholder:text-charcoal/45 disabled:cursor-not-allowed disabled:opacity-100";

const interestButtonClassName =
  "inline-flex min-h-11 w-full items-center justify-center rounded border border-burgundy px-4 py-3 text-sm font-semibold text-burgundy transition-colors hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold aria-pressed:bg-burgundy aria-pressed:text-gold sm:w-auto";

export function ContactSection() {
    const [interest, setInterest] = useState<ContactInterest>("join");

    const [formNotice, setFormNotice] = useState<string | null>(null);

    const [errors, setErrors] = useState<ContactErrors>({});

    const nameRef = useRef<HTMLInputElement>(null);
    const replyToRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const consentRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        setErrors({});
        setFormNotice(null);

        const formData = new FormData(event.currentTarget);

        const name = String(formData.get("name") ?? "").trim();
        const replyTo = String(formData.get("replyTo") ?? "").trim();
        const message = String(formData.get("message") ?? "").trim();
        const consent = formData.get("consent") === "on";

        if (!name) {
          setErrors({
            name: "Unesite ime i prezime.",
          });

          nameRef.current?.focus();
          return;
        }

        if (!replyTo) {
          setErrors({
            replyTo: "Unesite e-mail adresu ili broj telefona.",
          });

          replyToRef.current?.focus();
          return;
        }

        if (!message) {
          setErrors({
            message: "Unesite poruku. Samo razmaci nisu dovoljni.",
          });

          messageRef.current?.focus();
          return;
        }

        if (!consent) {
          setErrors({
            consent: "Potvrdite da prihvaćate da vas orkestar kontaktira.",
          });

          consentRef.current?.focus();
          return;
        }

        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo);

        const phoneDigits = replyTo.replace(/\D/g, "");

        const isPhone =
        /^\+?[0-9 ()-]+$/.test(replyTo) &&
        phoneDigits.length >= 7 &&
        phoneDigits.length <= 15;

        if (!isEmail && !isPhone) {
            setErrors({
                replyTo: "Unesite e-mail adresu ili broj telefona u ispravnom obliku.",
            });

            replyToRef.current?.focus();
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
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.external ? "_blank" : undefined}
                        rel={detail.external ? "noopener noreferrer" : undefined}
                        className="transition-colors hover:text-gold"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gold">
                  Društvene mreže
                </dt>

                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-2">
                    {siteConfig.socialLinks.map((socialLink) => (
                      <li key={socialLink.href}>
                        <a
                          href={socialLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center justify-center rounded border border-gold px-3 py-2 text-sm text-burgundy transition-colors hover:bg-gold hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                        >
                          {socialLink.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          <form 
                aria-label="Kontakt obrazac"
                noValidate
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
                      ref={nameRef}
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Vaše ime"
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      onChange={() => setErrors({})}
                      className={`${fieldClassName} aria-invalid:border-red-700`}
                    />

                    {errors.name && (
                      <p
                        id="contact-name-error"
                        role="alert"
                        className="mt-2 text-sm text-red-700"
                      >
                        {errors.name}
                      </p>
                    )}
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
                    {errors.replyTo && (
                      <p
                          id="contact-reply-to-error"
                          role="alert"
                          className="mt-2 text-sm text-red-700"
                      >
                          {errors.replyTo}
                      </p>
                    )}
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
                      ref={messageRef}
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Vaša poruka..."
                      required
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      onChange={() => setErrors({})}
                      className={`${fieldClassName} resize-y aria-invalid:border-red-700`}
                    />

                    {errors.message && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="mt-2 text-sm text-red-700"
                      >
                        {errors.message}
                      </p>
                    )}
                </div>

                <label
                htmlFor="contact-consent"
                className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/75"
                >
                  <input
                    ref={consentRef}
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    required
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={
                      errors.consent ? "contact-consent-error" : undefined
                    }
                    onChange={() => setErrors({})}
                    className="mt-1 h-4 w-4 shrink-0 accent-burgundy aria-invalid:outline-2 aria-invalid:outline-red-700"
                  />

                  <span>
                    Prihvaćam da me orkestar kontaktira u vezi s ovim upitom.
                  </span>
                </label>

                {errors.consent && (
                  <p
                    id="contact-consent-error"
                    role="alert"
                    className="mt-2 text-sm text-red-700"
                  >
                    {errors.consent}
                  </p>
                )}
                

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