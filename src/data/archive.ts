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
  date?: string;
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

const danDrzavnostiRivaImages: ArchiveImage[] = Array.from(
  { length: 12 },
  (_, index) => {
    const photoNumber = String(index + 1).padStart(2, "0");

    return {
      src: `/images/archive/events/dan-drzavnosti-riva-2025/photo-${photoNumber}.jpg`,
      alt: `Nastup HGD-a „Stjepan Radić“ na splitskoj Rivi povodom Dana državnosti 2025., fotografija ${index + 1}`,
      caption:
        "Nastup na splitskoj Rivi povodom Dana državnosti, 30. svibnja 2025.",
    };
  },
);

const imotski2026Images: ArchiveImage[] = Array.from(
  { length: 8 },
  (_, index) => {
    const photoNumber = String(index + 1).padStart(2, "0");

    return {
      src: `/images/archive/events/imotski-2026/photo-${photoNumber}.jpg`,
      alt: `Nastup Gradske glazbe Stjepan Radić na susretu puhačkih orkestara u Imotskom, fotografija ${
        index + 1
      }`,
      caption:
        "15. susret puhačkih orkestara Splitsko-dalmatinske županije, Imotski, 26. travnja 2026.",
    };
  },
);

const trogir2026Images: ArchiveImage[] = Array.from(
  { length: 17 },
  (_, index) => {
    const photoNumber = String(index + 1).padStart(2, "0");

    return {
      src: `/images/archive/events/trogir-2026/photo-${photoNumber}.JPG`,
      alt: `Zajednički koncert Narodne glazbe Trogir i HGD-a Stjepan Radić, fotografija ${
        index + 1
      }`,
      caption:
        "Prvi zajednički koncert Narodne glazbe Trogir i HGD-a „Stjepan Radić“ u Gradskoj loži u Trogiru.",
    };
  },
);

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
    id: "arhivski-dokument-1939",
    year: 1939,
    categories: ["dokumenti"],
    eyebrow: "Dokumenti",
    title: "Zahtjev društva iz 1939. godine",
    description:
      "Arhivska korespondencija datirana 19. veljače 1939. godine odnosi se na službeni zahtjev Hrvatskog građanskog društva „Stjepan Radić“ iz Žrnovnice za odobrenje javnih glazbenih nastupa. U dokumentu se kao tajnik društva navodi Ante Tolić. Pojedini detalji i naziv ustanove kojoj je zahtjev upućen još zahtijevaju arhivsku provjeru.",
    images: [
      {
        src: "/images/archive/documents/document-1939/page-01.webp",
        alt: "Prva stranica arhivskog dokumenta iz 1939. godine",
        caption: "Prva stranica službenog zahtjeva, datirana 19. veljače 1939.",
      },
      {
        src: "/images/archive/documents/document-1939/page-02.webp",
        alt: "Druga stranica arhivskog dokumenta iz 1939. godine",
        caption: "Druga stranica arhivske korespondencije.",
      },
      {
        src: "/images/archive/documents/document-1939/page-03.webp",
        alt: "Treća stranica arhivskog dokumenta iz 1939. godine",
        caption: "Treća stranica arhivske korespondencije.",
      },
    ],
  },
  {
    id: "zrnovacki-glazbari-1939",
    year: 1939,
    date: "1939-12-01",
    categories: ["fotografije", "ljudi"],
    eyebrow: "Fotografije · Glazbari",
    title: "Žrnovački glazbari 1939. godine",
    description:
      "Zajednička fotografija žrnovačkih glazbara snimljena je 1. prosinca 1939. godine. Članovi orkestra poziraju s puhačkim i udaraljkaškim instrumentima te društvenim stijegom. Fotografija je objavljena u knjizi Ivana Javorčića „Žrnovnica, od davnina do danas“.",
    images: [
      {
        src: "/images/archive/photos/1939/photo-01.jpg",
        alt: "Žrnovački glazbari s instrumentima i društvenim stijegom 1. prosinca 1939. godine",
        caption:
          "Žrnovački glazbari, 1. prosinca 1939. godine.",
      },
    ],
    source: {
      name: "Knjiga „Žrnovnica, od davnina do danas“",
      author: "Ivan Javorčić",
    },
  },
  {
    id: "dan-drzavnosti-riva-2025",
    year: 2025,
    date: "2025-05-30",
    categories: ["fotografije", "koncerti"],
    eyebrow: "Koncerti · Dan državnosti",
    title: "Nastup na Rivi povodom Dana državnosti",
    description:
      "HGD „Stjepan Radić“ nastupio je 30. svibnja 2025. na splitskoj Rivi povodom Dana državnosti Republike Hrvatske. Fotografije bilježe trenutke s nastupa orkestra u središtu Splita.",
    images: danDrzavnostiRivaImages,
  },
  {
    id: "plasman-na-drzavnu-smotru-2026",
    year: 2026,
    date: "2026-04-26",
    categories: ["fotografije", "koncerti"],
    eyebrow: "Koncerti · Smotra",
    title: "Plasman na državnu smotru",
    description:
      "Gradska glazba „Stjepan Radić“ Žrnovnica ostvarila je izvrstan rezultat na 15. susretu puhačkih orkestara Splitsko-dalmatinske županije, održanom 26. travnja 2026. u Imotskom. Izvedbom u slobodnoj koncertnoj kategoriji orkestar je izborio plasman na 39. Susret hrvatskih puhačkih orkestara, zakazan za 6. i 7. lipnja 2026. u Zagrebu.",
    images: imotski2026Images,
  },
  {
    id: "prvi-zajednicki-koncert-trogir-2026",
    year: 2026,
    categories: ["fotografije", "koncerti", "gostovanja"],
    eyebrow: "Koncerti · Gostovanja",
    title: "Prvi zajednički koncert u Trogiru",
    description:
        "U sklopu 56. Trogirskog kulturnog ljeta Narodna glazba Trogir ugostila je HGD „Stjepan Radić“ iz Žrnovnice u Gradskoj loži. Bio je to prvi zajednički koncert dvaju društava i prvi nastup žrnovačkog orkestra u Trogiru — susret posvećen druženju, razmjeni iskustava i povezivanju dviju dugih glazbenih tradicija.",
    images: trogir2026Images,
    source: {
        name: "Gradski radio Trogir",
        author: "A. L.",
    },
  },
];