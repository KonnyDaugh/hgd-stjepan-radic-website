export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
  imageAlt: string;
};

export const news: NewsItem[] = [
  {
    slug: "bozicni-koncert-2026",
    title: "Vidimo se u prosincu",
    date: "2026-12-01",
    category: "Koncert",
    excerpt:
      "Pripremamo poseban koncert kojim ćemo zajedno zaključiti još jednu godinu glazbe i druženja.",
    content: [
      "U prosincu vas očekuje naš tradicionalni koncert u Žrnovnici.",
      "Pripremamo program koji spaja tradiciju limene glazbe, poznate melodije i glazbu koju volimo izvoditi zajedno.",
      "Detalje o vremenu i mjestu koncerta objavit ćemo uskoro.",
    ],
    image: "/images/news/prosinac-2026.jpg",
    imageAlt: "Glazbenici HGD-a Stjepan Radić tijekom nastupa",
  },
  {
    slug: "115-godina-glazbe",
    title: "115 godina glazbe i zajedništva",
    date: "2026-09-01",
    category: "Orkestar",
    excerpt:
      "Više od stoljeća glazbe, generacija glazbenika i života našeg orkestra u Žrnovnici.",
    content: [
      "HGD Stjepan Radić Žrnovnica njeguje tradiciju limene glazbe koja traje više od jednog stoljeća.",
      "Kroz orkestar su prošle generacije glazbenika, a zajedništvo ostaje jedan od njegovih najvažnijih temelja.",
      "Danas nastavljamo graditi tu priču i otvarati vrata novim generacijama.",
    ],
    image: "/images/news/115-godina.jpg",
    imageAlt: "Članovi HGD-a Stjepan Radić Žrnovnica",
  },
  {
    slug: "glazba-koja-povezuje-generacije",
    title: "Glazba koja povezuje generacije",
    date: "2026-08-20",
    category: "Život orkestra",
    excerpt:
      "U našem orkestru zajedno sviraju različite generacije. Upravo je to dio njegove posebnosti.",
    content: [
      "Orkestar nije samo skup glazbenika. To je mjesto susreta, učenja i druženja.",
      "Iskusniji članovi prenose znanje mlađima, a nove generacije donose novu energiju i ideje.",
    ],
    image: "/images/news/glazba-povezuje-generacije.jpg",
    imageAlt: "Glazbenici različitih generacija tijekom zajedničkog nastupa",
  },
];