export type VideoPreview = {
  id: string;
  title: string;
  year: number | null;
  poster: string;
  youtubeId: string;
  featured?: boolean;
};

export const videos: VideoPreview[] = [
  {
    id: "documentary-2022",
    title:
      'Dokumentarni film — "HGD Stjepan Radić — Limena glazba Žrnovnica"',
    year: 2022,
    poster: "/images/orchestra-today-main.webp",
    youtubeId: "Jtn9rKyj8k8",
    featured: true,
  },
  {
    id: "110-years",
    title: "110 godina limene glazbe u Žrnovnici",
    year: 2022,
    poster: "/images/orchestra-today-detail-1.webp",
    youtubeId: "Lnr5hoQ7kms",
  }
];