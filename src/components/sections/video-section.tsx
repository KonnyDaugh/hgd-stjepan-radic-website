"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { Container } from "@/components/ui/container";
import { videos, type VideoPreview } from "@/data/videos";

export function VideoSection() {
  const featuredVideo = videos.find((video) => video.featured);
  const secondaryVideos = videos.filter((video) => !video.featured);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const [selectedVideo, setSelectedVideo] =
    useState<VideoPreview | null>(null);

  function openVideo(video: VideoPreview) {
    setSelectedVideo(video);
    dialogRef.current?.showModal();
  }

  function closeVideo() {
    dialogRef.current?.close();
    setSelectedVideo(null);
  }

  return (
    <section
      id="posljednji-nastup"
      aria-labelledby="videos-title"
      className="scroll-mt-24 bg-cream text-charcoal"
    >
      <Container className="py-20 md:py-28">
        <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gold">
          Poslušajte nas
        </p>

        <h2
          id="videos-title"
          className="max-w-2xl font-serif text-4xl leading-tight italic text-burgundy md:text-5xl lg:text-6xl"
        >
          Glazba se najbolje
          <br className="hidden sm:block" /> predstavlja sama.
        </h2>

        {featuredVideo && (
            <button
                type="button"
                onClick={() => openVideo(featuredVideo)}
                className="relative mt-12 block w-full overflow-hidden rounded-xl bg-white text-left"
            >
                <span className="relative flex aspect-video items-center justify-center bg-burgundy">
                <Image
                    src={featuredVideo.poster}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 1200px, 100vw"
                    className="object-cover"
                />

                <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-burgundy/50"
                />

                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-charcoal sm:h-20 sm:w-20">
                    <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 sm:h-8 sm:w-8"
                    >
                    <path d="M8 5v14l11-7z" />
                    </svg>
                </span>
                </span>

                <span className="relative z-10 block p-4 sm:absolute sm:inset-x-4 sm:top-1/2 sm:mt-14 sm:p-0 sm:text-center">
                <span className="block font-serif text-lg italic text-burgundy sm:text-2xl sm:text-cream">
                    {featuredVideo.title}
                </span>

                <span className="mt-1 block text-xs text-charcoal/60 sm:text-sm sm:text-cream/70">
                    {featuredVideo.year !== null
                    ? `${featuredVideo.year} · Lokacija za potvrdu`
                    : "Godina i lokacija za potvrdu"}
                </span>
                </span>
            </button>
        )}

        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {secondaryVideos.map((video) => (
            <li
              key={video.id}
              className="overflow-hidden rounded-xl bg-white"
            >
              <button
                type="button"
                onClick={() => openVideo(video)}
                className="block h-full w-full text-left"
              >
                <span className="relative flex aspect-video items-center justify-center bg-burgundy">
                  <Image
                    src={video.poster}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-burgundy/35"
                  />

                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-charcoal">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>

                <span className="block p-4">
                  <span className="block font-semibold text-burgundy">
                    {video.title}
                  </span>

                  <span className="mt-1 block text-sm text-charcoal/60">
                    {video.year ?? "Godina za potvrdu"}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <dialog
          ref={dialogRef}
          aria-labelledby="video-dialog-title"
          onClose={() => setSelectedVideo(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeVideo();
            }
          }}
          className="m-auto w-[calc(100%-2rem)] max-w-4xl overflow-hidden rounded-xl bg-charcoal p-0 text-cream backdrop:bg-charcoal/85"
        >
          <div className="flex items-center justify-between gap-4 border-b border-cream/15 px-5 py-4">
            <h3
              id="video-dialog-title"
              className="font-serif text-xl"
            >
              {selectedVideo?.title}
            </h3>

            <button
              type="button"
              onClick={closeVideo}
              aria-label="Zatvori video"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/30 text-2xl transition-colors hover:border-gold hover:text-gold"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          {selectedVideo && (
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?playsinline=1`}
                title={selectedVideo.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
        </dialog>
      </Container>
    </section>
  );
}