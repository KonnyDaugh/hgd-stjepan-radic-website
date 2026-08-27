"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import type { ArchiveImage } from "@/data/archive";

type ArchiveGalleryProps = {
  images: ArchiveImage[];
};

export function ArchiveGallery({ images }: ArchiveGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) {
    return null;
  }

  function openGallery() {
    setActiveIndex(0);
    dialogRef.current?.showModal();
  }

  function closeGallery() {
    dialogRef.current?.close();
  }

  function showPrevious() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  }

  function showNext() {
    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLDialogElement>,
  ) {
    if (event.key === "ArrowLeft") {
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      showNext();
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openGallery}
        className="group relative block aspect-4/3 w-full overflow-hidden text-left sm:aspect-16/6 lg:aspect-5/1"
        aria-label="Otvori galeriju fotografija"
      >
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover sepia transition-transform duration-500 group-hover:scale-105"
        />

        <span
          className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/25"
          aria-hidden="true"
        />

        <span className="absolute bottom-4 right-4 rounded-full bg-burgundy/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold">
          Pogledaj
          {images.length > 1 && ` · ${images.length}`}
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onKeyDown={handleKeyDown}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeGallery();
          }
        }}
        className="m-auto w-[94vw] max-w-6xl border-0 bg-transparent p-0 text-cream backdrop:bg-charcoal/90"
      >
        <div className="relative rounded-lg bg-charcoal p-4 shadow-2xl sm:p-6">
          <button
            type="button"
            onClick={closeGallery}
            className="absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full bg-burgundy text-2xl text-gold transition-colors hover:bg-gold hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label="Zatvori galeriju"
          >
            ×
          </button>

          <div className="relative h-[70svh]">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="94vw"
              className="object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-burgundy/90 text-2xl text-gold"
                  aria-label="Prethodna fotografija"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-burgundy/90 text-2xl text-gold"
                  aria-label="Sljedeća fotografija"
                >
                  →
                </button>
              </>
            )}
          </div>

          {(activeImage.caption || activeImage.credit) && (
            <div className="mt-4 pr-14">
              {activeImage.caption && (
                <p className="text-sm text-cream/80">
                  {activeImage.caption}
                </p>
              )}

              {activeImage.credit && (
                <p className="mt-1 text-xs text-cream/55">
                  Foto: {activeImage.credit}
                </p>
              )}
            </div>
          )}

          {images.length > 1 && (
            <p className="mt-3 text-xs text-cream/55">
              {activeIndex + 1} / {images.length}
            </p>
          )}
        </div>
      </dialog>
    </>
  );
}