"use client";

import { useEffect, useState } from "react";
import type { SubmitEventHandler } from "react";

export type ContributionType = "recognition" | "memory";

type ArchiveContributionModalProps = {
  type: ContributionType | null;
  onClose: () => void;
};

export function ArchiveContributionModal({
  type,
  onClose,
}: ArchiveContributionModalProps) {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (type === null) {
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
  }, [type, onClose]);

  if (type === null) {
    return null;
  }

  const isRecognition = type === "recognition";

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-charcoal/75 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="archive-modal-title"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-cream p-6 text-charcoal shadow-2xl md:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Zatvori obrazac"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-2xl text-burgundy transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-gold"
        >
          ×
        </button>

        <p className="pr-12 text-xs font-semibold uppercase tracking-widest text-gold">
          Živući arhiv
        </p>

        <h2
          id="archive-modal-title"
          className="mt-4 pr-12 font-serif text-3xl italic text-burgundy md:text-4xl"
        >
          {isRecognition
            ? "Prepoznajete li nekoga?"
            : "Podijelite svoju uspomenu"}
        </h2>

        <p className="mt-5 max-w-xl leading-relaxed text-charcoal/70">
          {isRecognition
            ? "Recite nam koga prepoznajete te sve što znate o fotografiji, događaju ili godini."
            : "Podijelite priču, fotografiju ili podatke koji mogu pomoći u očuvanju povijesti orkestra."}
        </p>

        <form
        className="mt-8 space-y-5"
        onSubmit={handleSubmit}
        onChange={() => setIsSubmitted(false)}
        >
        <div>
            <label
            htmlFor="archive-name"
            className="text-sm font-semibold text-burgundy"
            >
            Ime i prezime
            </label>

            <input
            id="archive-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            autoFocus
            className="mt-2 block min-h-12 w-full rounded border border-gold bg-white px-4 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
            />
        </div>

        <div>
            <label
            htmlFor="archive-contact"
            className="text-sm font-semibold text-burgundy"
            >
            E-mail ili telefon
            </label>

            <input
            id="archive-contact"
            name="contact"
            type="text"
            required
            placeholder="Kako vas možemo kontaktirati"
            className="mt-2 block min-h-12 w-full rounded border border-gold bg-white px-4 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
            />
        </div>

        {isRecognition ? (
            <div className="space-y-5">
                <div>
                    <label
                        htmlFor="recognized-person"
                        className="text-sm font-semibold text-burgundy"
                    >
                        Ime prepoznate osobe
                    </label>

                    <input
                        id="recognized-person"
                        name="recognizedPerson"
                        type="text"
                        required
                        placeholder="Ime i prezime, ako je poznato"
                        className="mt-2 block min-h-12 w-full rounded border border-gold bg-white px-4 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                    />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                        htmlFor="recognition-year"
                        className="text-sm font-semibold text-burgundy"
                        >
                        Približna godina
                        </label>

                        <input
                        id="recognition-year"
                        name="year"
                        type="number"
                        min="1911"
                        placeholder="Npr. 1985"
                        className="mt-2 block min-h-12 w-full rounded border border-gold bg-white px-4 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                        />
                    </div>

                    <div>
                        <label
                        htmlFor="recognition-relationship"
                        className="text-sm font-semibold text-burgundy"
                        >
                        Kako poznajete osobu?
                        </label>

                        <input
                        id="recognition-relationship"
                        name="relationship"
                        type="text"
                        placeholder="Obitelj, prijatelj, glazbenik..."
                        className="mt-2 block min-h-12 w-full rounded border border-gold bg-white px-4 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="recognition-context"
                        className="text-sm font-semibold text-burgundy"
                    >
                        Na kojoj fotografiji prepoznajete osobu?
                    </label>

                    <textarea
                        id="recognition-context"
                        name="recognitionContext"
                        rows={4}
                        required
                        placeholder="Opišite fotografiju, događaj, mjesto ili položaj osobe na fotografiji..."
                        className="mt-2 block w-full resize-y rounded border border-gold bg-white px-4 py-3 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                    />
                </div>
            </div>
            ) : (
            <div className="space-y-5">
                <div>
                    <label
                        htmlFor="memory-title"
                        className="text-sm font-semibold text-burgundy"
                    >
                        Naziv uspomene ili događaja
                    </label>

                    <input
                        id="memory-title"
                        name="memoryTitle"
                        type="text"
                        required
                        placeholder="Npr. Ljetni koncert u Žrnovnici"
                        className="mt-2 block min-h-12 w-full rounded border border-gold bg-white px-4 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                    />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label
                        htmlFor="memory-year"
                        className="text-sm font-semibold text-burgundy"
                        >
                        Godina, ako je poznata
                        </label>

                        <input
                        id="memory-year"
                        name="year"
                        type="number"
                        min="1911"
                        placeholder="Npr. 1998"
                        className="mt-2 block min-h-12 w-full rounded border border-gold bg-white px-4 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                        />
                    </div>

                    <div>
                        <label
                        htmlFor="memory-location"
                        className="text-sm font-semibold text-burgundy"
                        >
                        Mjesto
                        </label>

                        <input
                        id="memory-location"
                        name="location"
                        type="text"
                        placeholder="Žrnovnica, Split..."
                        className="mt-2 block min-h-12 w-full rounded border border-gold bg-white px-4 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="memory-description"
                        className="text-sm font-semibold text-burgundy"
                    >
                        Ispričajte svoju uspomenu
                    </label>

                    <textarea
                        id="memory-description"
                        name="memoryDescription"
                        rows={5}
                        required
                        placeholder="Što se dogodilo, tko je sudjelovao i zašto vam je ova uspomena važna?"
                        className="mt-2 block w-full resize-y rounded border border-gold bg-white px-4 py-3 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                    />
                </div>
            </div>
        )}

        <div>
            <label
            htmlFor="archive-description"
            className="text-sm font-semibold text-burgundy"
            >
            Ispričajte nam što znate
            </label>

            <textarea
            id="archive-description"
            name="description"
            rows={5}
            required
            placeholder="Osobe, događaj, mjesto, približna godina..."
            className="mt-2 block w-full resize-y rounded border border-gold bg-white px-4 py-3 outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
            />
        </div>

        <div>
            <label
            htmlFor="archive-photos"
            className="text-sm font-semibold text-burgundy"
            >
            {isRecognition
                ? "Fotografija ili snimka zaslona"
                : "Dodajte fotografije uz uspomenu"}
            </label>

            <input
            id="archive-photos"
            name="photos"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            className="mt-2 block w-full rounded border border-gold bg-white px-4 py-3 text-sm file:mr-4 file:rounded file:border-0 file:bg-paper file:px-4 file:py-2 file:font-semibold file:text-burgundy"
            />

            <p className="mt-2 text-xs text-charcoal/60">
                {isRecognition
                    ? "Možete priložiti fotografiju na kojoj ste prepoznali osobu."
                    : "Možete priložiti jednu ili više fotografija povezanih s uspomenom."}
                {" "}Datoteke se u demonstracijskoj verziji ne prenose.
            </p>
        </div>

        <label className="flex items-start gap-3">
            <input
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-5 w-5 accent-burgundy"
            />

            <span className="text-sm leading-relaxed text-charcoal/70">
            Potvrđujem da me orkestar smije kontaktirati u vezi s poslanim
            podacima i fotografijama.
            </span>
        </label>

        <p className="text-sm italic text-charcoal/60">
            Demonstracijska verzija: podaci se trenutačno ne šalju.
        </p>

        <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded bg-burgundy px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
        >
            Pošalji podatke
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