"use client";

import { useEffect, useState } from "react";
import type { SubmitEventHandler } from "react";

export type SupportModalItem = {
  title: string;
  description: string;
};

type SupportModalProps = {
  item: SupportModalItem | null;
  onClose: () => void;
};

type HelpType =
  | "financial"
  | "equipment"
  | "partnership"
  | "other";

const helpTypes: Array<{
  id: HelpType;
  label: string;
  description: string;
}> = [
  {
    id: "financial",
    label: "Financijska donacija",
    description: "Želim financijski podržati odabrani cilj.",
  },
  {
    id: "equipment",
    label: "Oprema ili usluga",
    description: "Mogu ponuditi instrument, popravak, prijevoz ili drugu uslugu.",
  },
  {
    id: "partnership",
    label: "Partnerstvo ili sponzorstvo",
    description: "Predstavljam organizaciju zainteresiranu za suradnju.",
  },
  {
    id: "other",
    label: "Drugi način pomoći",
    description: "Imam drugi prijedlog za podršku orkestru.",
  },
];

export function SupportModal({ item, onClose }: SupportModalProps) {
  const [selectedHelpType, setSelectedHelpType] = useState<HelpType | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();

  if (selectedHelpType === null) {
    return;
  }

  setIsSubmitted(true);
};
  useEffect(() => {
    if (item === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (item === null) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-charcoal/75 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="support-modal-title"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-cream p-6 text-charcoal shadow-2xl md:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Zatvori"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-2xl text-burgundy transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-gold"
        >
          ×
        </button>

        <p className="pr-12 text-xs font-semibold uppercase tracking-widest text-gold">
          Podržite orkestar
        </p>

        <h2
          id="support-modal-title"
          className="mt-4 pr-12 font-serif text-3xl italic text-burgundy md:text-4xl"
        >
          {item.title}
        </h2>

        <p className="mt-5 max-w-xl leading-relaxed text-charcoal/70">
          {item.description}
        </p>

        <form
        className="mt-8 space-y-6"
        onSubmit={handleSubmit}
        onChange={() => setIsSubmitted(false)}
        >
        <fieldset>
            <legend className="font-semibold text-burgundy">
            Kako želite pomoći?
            </legend>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {helpTypes.map((helpType) => {
                const isSelected = selectedHelpType === helpType.id;

                return (
                <label
                    key={helpType.id}
                    className={`cursor-pointer rounded-lg border-2 p-4 transition-colors ${
                    isSelected
                        ? "border-burgundy bg-burgundy text-cream"
                        : "border-gold bg-white text-charcoal hover:bg-paper"
                    }`}
                >
                    <input
                    type="radio"
                    name="helpType"
                    value={helpType.id}
                    checked={isSelected}
                    onChange={() => setSelectedHelpType(helpType.id)}
                    className="sr-only"
                    />

                    <span
                    className={`block font-semibold ${
                        isSelected ? "text-gold" : "text-burgundy"
                    }`}
                    >
                    {helpType.label}
                    </span>

                    <span
                    className={`mt-2 block text-sm leading-relaxed ${
                        isSelected ? "text-cream/75" : "text-charcoal/60"
                    }`}
                    >
                    {helpType.description}
                    </span>
                </label>
                );
            })}
            </div>
        </fieldset>

        <div className="grid gap-5 sm:grid-cols-2">
            <div>
            <label
                htmlFor="support-name"
                className="text-sm font-semibold text-burgundy"
            >
                Ime i prezime
            </label>

            <input
                id="support-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 block min-h-12 w-full rounded border border-gold bg-white px-4 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
            />
            </div>

            <div>
            <label
                htmlFor="support-contact"
                className="text-sm font-semibold text-burgundy"
            >
                E-mail ili telefon
            </label>

            <input
                id="support-contact"
                name="contact"
                type="text"
                required
                placeholder="Kako vas možemo kontaktirati"
                className="mt-2 block min-h-12 w-full rounded border border-gold bg-white px-4 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
            />
            </div>
        </div>

        {selectedHelpType === "financial" && (
            <div>
            <label
                htmlFor="support-amount"
                className="text-sm font-semibold text-burgundy"
            >
                Okvirni iznos, nije obavezno
            </label>

            <div className="relative mt-2">
                <input
                id="support-amount"
                name="amount"
                type="number"
                min="1"
                inputMode="decimal"
                className="block min-h-12 w-full rounded border border-gold bg-white px-4 pr-12 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-charcoal/60">
                €
                </span>
            </div>
            </div>
        )}

        <div>
            <label
            htmlFor="support-message"
            className="text-sm font-semibold text-burgundy"
            >
            Poruka
            </label>

            <textarea
            id="support-message"
            name="message"
            rows={4}
            placeholder={`Želim pomoći s ciljem: ${item.title}`}
            className="mt-2 block w-full resize-y rounded border border-gold bg-white px-4 py-3 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
            />
        </div>

        <label className="flex items-start gap-3">
            <input
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-5 w-5 accent-burgundy"
            />

            <span className="text-sm leading-relaxed text-charcoal/70">
            Prihvaćam da me orkestar kontaktira u vezi s ovim prijedlogom pomoći.
            </span>
        </label>

        <p className="text-sm italic text-charcoal/60">
            Demonstracijska verzija: podaci se trenutačno ne šalju, a uplata se ne
            izvršava.
        </p>

        <button
            type="submit"
            disabled={selectedHelpType === null}
            className="inline-flex min-h-12 w-full items-center justify-center rounded bg-burgundy px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-burgundy disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
            Pošalji upit
        </button>

        {isSubmitted && (
            <p
            role="status"
            className="rounded border border-gold bg-paper p-4 text-sm text-burgundy"
            >
            Hvala! Obrazac je ispravno ispunjen, ali slanje još nije povezano.
            </p>
        )}
        </form>
      </div>
    </div>
  );
}