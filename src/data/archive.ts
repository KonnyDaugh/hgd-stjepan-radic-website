export type ArchiveCategoryId =
  | "sve"
  | "fotografije"
  | "dokumenti"
  | "koncerti"
  | "gostovanja"
  | "ljudi";

type ArchiveEntryCategory = Exclude<ArchiveCategoryId, "sve">;

export type ArchiveCategory = {
  id: ArchiveCategoryId;
  label: string;
};

export type ArchiveImage = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
};

export type ArchiveSource = {
  name: string;
  author?: string;
  url?: string;
  photoCredit?: string;
};

export type ArchiveEntry = {
  id: string;
  year: number | null;
  categories: ArchiveEntryCategory[];
  eyebrow: string;
  title: string;
  description: string;
  images:ArchiveImage[];
  source?: ArchiveSource;
};

export const archiveCategories: ArchiveCategory[] = [
  { id: "sve", label: "Sve" },
  { id: "fotografije", label: "Fotografije" },
  { id: "dokumenti", label: "Dokumenti" },
  { id: "koncerti", label: "Koncerti" },
  { id: "gostovanja", label: "Gostovanja" },
  { id: "ljudi", label: "Ljudi" },
];

export const archiveEntries: ArchiveEntry[] = [
  {
    id: "osnivanje-drustva",
    year: 1911,
    categories: [],
    eyebrow: "Početak",
    title: "Osnivanje društva",
    description:
      "Hrvatsko glazbeno društvo „Stjepan Radić“ osnovano je 1911. godine u Žrnovnici. Točne okolnosti osnivanja bit će dopunjene nakon provjere arhivske građe.",
      images: [],
  },
  {
    id: "arhivska-fotografija-1",
    year: null,
    categories: ["fotografije"],
    eyebrow: "Fotografije",
    title: "Arhivska fotografija",
    description:
      "Godina snimanja i okolnosti nastanka fotografije još nisu potvrđene.",
    images: [
        {
            src: "/images/archive-undated-1.webp",
            alt: "Arhivska fotografija HGD-a „Stjepan Radić“",
            caption: "Godina snimanja još nije potvrđena.",
        },
    ],
  },
  {
    id: "prvi-zajednicki-koncert-trogir-2026",
    year: 2026,
    categories: ["fotografije", "koncerti", "gostovanja"],
    eyebrow: "Koncerti · Gostovanja",
    title: "Prvi zajednički koncert u Trogiru",
    description:
        "U sklopu 56. Trogirskog kulturnog ljeta Narodna glazba Trogir ugostila je HGD „Stjepan Radić“ iz Žrnovnice u Gradskoj loži. Bio je to prvi zajednički koncert dvaju društava i prvi nastup žrnovačkog orkestra u Trogiru — susret posvećen druženju, razmjeni iskustava i povezivanju dviju dugih glazbenih tradicija.",
    images: [
        {
            src: "/images/archive-concert-2026.webp",
            alt: "Zajednički koncert u Gradskoj loži u Trogiru 2026. godine",
            caption:
            "Prvi zajednički koncert Narodne glazbe Trogir i HGD-a „Stjepan Radić“.",
        },
    ],
    source: {
        name: "Gradski radio Trogir",
        author: "A. L.",
    },
    },
];