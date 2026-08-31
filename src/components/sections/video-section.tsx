import Image from "next/image";

import { Container } from "@/components/ui/container";
import { videos } from "@/data/videos";

export function VideoSection() {
  const featuredVideo = videos.find((video) => video.featured);

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
                disabled
                className="relative mt-12 block w-full overflow-hidden rounded-xl bg-white text-left disabled:cursor-not-allowed"
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

        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <li
              key={video.id}
              className="overflow-hidden rounded-xl bg-white"
            >
              <button
                type="button"
                disabled
                className="block h-full w-full text-left disabled:cursor-not-allowed"
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
      </Container>
    </section>
  );
}