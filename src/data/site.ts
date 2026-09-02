export const siteConfig = {
  shortName: 'HGD "Stjepan Radić"',
  fullName: 'Hrvatsko glazbeno društvo "Stjepan Radić" Žrnovnica',
  location: "Žrnovnica",
  foundedYear: 1911,
  tagline: "115 godina glazbe koja povezuje generacije.",

  navigation: [
    { label: "Početna", href: "#hero" },
    { label: "Koncerti", href: "#dogadanja" },
    { label: "115 godina", href: "#115-godina" },
    { label: "O nama", href: "#o-nama" },
    { label: "Pridruži se", href: "#pridruzi-se" },
    { label: "Podrži nas", href: "#podrzi" },
    { label: "Kontakt", href: "#kontakt" },
  ],

  contact: {
    email: "limenaglazba.zrnovnica@gmail.com",

    phone: {
      label: "+385 91 919 1121",
      href: "tel:+385919191121",
    },

    address: {
      label: "Starčevićeva 25, 21251 Žrnovnica",
      href: "https://www.google.com/maps/search/?api=1&query=Star%C4%8Devi%C4%87eva%2025%2C%2021251%20%C5%BDrnovnica",
    },
  },

  socialLinks: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/limenaglazba.zrnovnica/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/limena.glazba.zrnovnica/",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@limenaglazbazrnovnica9255",
    },
  ],

  rehearsal: {
    schedule: "Utorkom i petkom u 19:45",
    attendanceNote:
      "Probu možete posjetiti i bez prethodne najave.",
  },
} as const;