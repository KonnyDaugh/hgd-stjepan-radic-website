export type VideoPreview = {
  id: string;
  title: string;
  year: number | null;
  poster: string;
  featured?: boolean;
};

export const videos: VideoPreview[] = [
  {
    id: "performance",
    title: "Nastup — naziv za potvrdu",
    year: null,
    poster: "/images/orchestra-today-main.webp",
    featured: true,
  },
  {
    id: "annual-concert",
    title: "Godišnji koncert — za potvrdu",
    year: null,
    poster: "/images/next-performance.webp",
  },
  {
    id: "rehearsal",
    title: "Proba — za potvrdu",
    year: null,
    poster: "/images/orchestra-today-detail-1.webp",
  },
];