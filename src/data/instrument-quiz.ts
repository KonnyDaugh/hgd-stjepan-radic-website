export type InstrumentId =
  | "flute"
  | "clarinet"
  | "saxophone"
  | "trumpet"
  | "trombone"
  | "tuba"
  | "percussion";

export type InstrumentQuizResult = {
  id: InstrumentId;
  name: string;
  description: string;
};

export type InstrumentQuizOption = {
  id: string;
  label: string;
  scores: Partial<Record<InstrumentId, number>>;
};

export const instrumentQuizResults: Record<
  InstrumentId,
  InstrumentQuizResult
> = {
  flute: {
    id: "flute",
    name: "Flauta",
    description:
      "Mogao bi ti odgovarati nježan, prozračan zvuk i lagane, pokretne melodije.",
  },
  clarinet: {
    id: "clarinet",
    name: "Klarinet",
    description:
      "Mogao bi ti odgovarati topao, prilagodljiv zvuk koji povezuje različite dijelove orkestra.",
  },
  saxophone: {
    id: "saxophone",
    name: "Saksofon",
    description:
      "Mogao bi ti odgovarati izražajan instrument snažnog karaktera i bogate boje zvuka.",
  },
  trumpet: {
    id: "trumpet",
    name: "Truba",
    description:
      "Mogao bi ti odgovarati jasan, snažan zvuk i uloga koja se često ističe u orkestru.",
  },
  trombone: {
    id: "trombone",
    name: "Trombon",
    description:
      "Mogao bi ti odgovarati dubok i snažan zvuk koji podržava harmoniju orkestra.",
  },
  tuba: {
    id: "tuba",
    name: "Tuba",
    description:
      "Mogla bi ti odgovarati važna uloga u stvaranju dubokog i stabilnog temelja orkestra.",
  },
  percussion: {
    id: "percussion",
    name: "Udaraljke",
    description:
      "Mogli bi ti odgovarati ritam, energija, preciznost i aktivna uloga u zajedničkom muziciranju.",
  },
};

export type InstrumentQuizQuestion = {
  id: string;
  prompt: string;
  options: InstrumentQuizOption[];
};

export const instrumentQuizQuestions: InstrumentQuizQuestion[] = [
  {
    id: "sound",
    prompt: "Koji te zvuk najviše privlači?",
    options: [
      {
        id: "gentle",
        label: "Nježan i prozračan",
        scores: {
            flute: 3,
            clarinet: 2,
        },
      },
      {
        id: "warm",
        label: "Topao i izražajan",
        scores: {
            clarinet: 3,
            saxophone: 2,
            trombone: 1,
        },
      },
      {
        id: "powerful",
        label: "Snažan i svečan",
        scores: {
            trumpet: 3,
            trombone: 2,
            tuba: 1,
        },
      },
      {
        id: "rhythmic",
        label: "Ritmičan i energičan",
        scores: {
            percussion: 3,
            saxophone: 1,
            trumpet: 1,
        },
      },
    ],
  },
  {
    id: "role",
    prompt: "Koja ti je uloga u orkestru najprivlačnija?",
    options: [
      {
        id: "melody",
        label: "Voditi melodiju",
        scores:{ 
            flute: 2, 
            clarinet: 2, 
            trumpet: 2, 
            saxophone: 1 
        }
      },
      {
        id: "color",
        label: "Dodavati zvuku boju i karakter",
        scores:{ 
            saxophone: 3, 
            clarinet: 2 
        }
      },
      {
        id: "support",
        label: "Podržavati ostale glazbenike",
        scores:{ 
            trombone: 3, 
            clarinet: 1, 
            tuba: 1 
        }        
      },
      {
        id: "foundation",
        label: "Graditi ritam i temelj orkestra",
        scores:{ 
            tuba: 3, 
            percussion: 2, 
            trombone: 1 
        }    
      },
    ],
  },
  {
    id: "expression",
    prompt: "Kako bi najradije izražavao ili izražavala glazbu?",
    options: [
      {
        id: "light",
        label: "Lagano, brzo i razigrano",
        scores:{ 
            flute: 3, 
            clarinet: 1 
        }  
      },
      {
        id: "emotional",
        label: "Toplo i osjećajno",
        scores:{ 
            saxophone: 3, 
            clarinet: 2, 
            trombone: 1 
        }  
      },
      {
        id: "bold",
        label: "Odvažno i snažno",
        scores:{ 
            trumpet: 3, 
            trombone: 2 
        }  
      },
      {
        id: "steady",
        label: "Mirno, pouzdano i precizno",
        scores:{ 
            tuba: 3, 
            percussion: 2, 
            clarinet: 1 
        }  
      },
    ],
  },
  {
    id: "instrument-size",
    prompt: "Kakav ti instrument djeluje najugodnije?",
    options: [
      {
        id: "small",
        label: "Manji i lagan instrument",
        scores:{ 
            flute: 3, 
            clarinet: 2, 
            trumpet: 2 
        }  
      },
      {
        id: "medium",
        label: "Instrument srednje veličine",
        scores:{ 
            saxophone: 3, 
            trumpet: 1, 
            trombone: 1
        }  
      },
      {
        id: "large",
        label: "Veći instrument mi ne smeta",
        scores:{ 
            tuba: 3, 
            trombone: 2
        }  
      },
      {
        id: "any",
        label: "Veličina mi nije važna",
        scores:{}  
      },
    ],
  },
];