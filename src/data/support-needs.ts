export type SupportNeed = {
  id: string;
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
};

export const supportNeeds: SupportNeed[] = [
  {
    id: "tuba",
    icon: "🎺",
    title: "Tuba za buduće generacije",
    description:
      "Novi instrument služit će sadašnjim članovima i budućim generacijama mladih glazbenika.",
    featured: true,
  },
  {
    id: "popravak",
    icon: "🔧",
    title: "Popravak instrumenata",
    description:
      "Održavanje i restauracija postojećih instrumenata orkestra.",
  },
  {
    id: "prijevoz",
    icon: "🚌",
    title: "Putovanja i prijevoz",
    description:
      "Organizacija gostovanja i nastupa izvan Žrnovnice.",
  },
  {
    id: "koncerti",
    icon: "🎵",
    title: "Organizacija koncerata",
    description:
      "Tehnika, dvorana, programi i promidžbeni materijali.",
  },
  {
    id: "obrazovanje",
    icon: "🎓",
    title: "Glazbeno obrazovanje djece",
    description:
      "Poduka instrumenta za mlade početnike.",
  },
  {
    id: "odore",
    icon: "👔",
    title: "Odore i koncertna odjeća",
    description:
      "Reprezentativan nastup na svim događajima.",
  },
];