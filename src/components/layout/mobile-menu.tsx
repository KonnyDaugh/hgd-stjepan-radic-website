"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    const dialog = dialogRef.current;

    if (!dialog || dialog.open) return;

    triggerRef.current?.focus({ preventScroll: true });
    dialog.showModal();
    dialog.scrollTop = 0;
    setIsOpen(true);
  }

  function closeMenu() {
    dialogRef.current?.close();
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;

    root.style.overflow = "hidden";

    const desktop = window.matchMedia("(min-width: 80rem)");

    function closeOnDesktop() {
      if (desktop.matches) {
        dialogRef.current?.close();
      }
    }

    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();

    return () => {
      root.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openMenu}
        aria-label="Otvori izbornik"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-haspopup="dialog"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded text-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold xl:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          aria-hidden="true"
          className="h-7 w-7"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label="Glavna navigacija"
        onClose={() => setIsOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain border-0 bg-burgundy p-0 text-cream backdrop:bg-burgundy"
      >
        <Container className="min-h-full pb-10 pt-[env(safe-area-inset-top)]">
          <div className="sticky top-0 z-10 flex min-h-18 items-center justify-between gap-4 bg-burgundy">
            <p className="min-w-0 font-serif text-lg">
              {siteConfig.shortName}
            </p>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Zatvori izbornik"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <nav
            aria-label="Mobilna navigacija"
            className="mt-10"
          >
            <ul className="divide-y divide-gold/15 border-b border-gold/15">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded py-4 font-serif text-3xl text-cream transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold sm:text-4xl"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#pridruzi-se"
            onClick={closeMenu}
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded border border-gold px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Dođi na probu
          </a>
        </Container>
      </dialog>
    </>
  );
}