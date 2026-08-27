
import { Container } from "@/components/ui/container";

import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function VisitorPathSelector() {
    type VisitorPathId = "slusati" | "svirati" | "podrzati";
    type VisitorPath = {
        id: VisitorPathId;
        label: string;
        title: string;
        description: string;
        action: string;
        href: string;
    };

    const visitorPaths: VisitorPath[] = [
        {
            id: "slusati",
            label: "Za publiku",
            title: "Dođite nas poslušati",
            description:
            "Pratite naše nastupe i doživite glazbu koja već generacijama okuplja Žrnovnicu.",
            action: "Pogledaj događanja",
            href: "#dogadanja",
        },
        {
            id: "svirati",
            label: "Za buduće članove",
            title: "Pridružite se orkestru",
            description:
            "Djeca i odrasli mogu doći na probu, upoznati orkestar i pronaći svoj instrument.",
            action: "Dođi na probu",
            href: "#pridruzi-se",
        },
        {
            id: "podrzati",
            label: "Za partnere",
            title: "Podržite naš rad",
            description:
            "Pomozite nam obnoviti instrumente, organizirati koncerte i obrazovati nove glazbenike.",
            action: "Postani partner",
            href: "#podrzi",
        },
    ];

    return (
        <section className="bg-cream text-charcoal">
            <Container className="py-20 md:py-28">
                <SectionEyebrow>Pronađite svoje mjesto</SectionEyebrow>

                <div className="max-w-3xl">
                    <h2 className="font-serif text-4xl text-burgundy md:text-5xl">
                    Kako želite postati dio naše priče?
                    </h2>

                    <p className="mt-5 leading-relaxed text-charcoal/70">
                    Poslušajte nas, pridružite se orkestru ili podržite naš rad.
                    </p>
                </div>

                <ul className="mt-12 grid gap-5 md:grid-cols-3">
                    {visitorPaths.map((path) => (
                    <li key={path.id} className="flex">
                        <a
                        href={path.href}
                        className="group flex w-full flex-col rounded border-2 border-gold bg-gold/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-burgundy focus-visible:bg-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:translate-y-0 active:bg-burgundy"
                        >
                        <span className="text-xs font-semibold uppercase tracking-widest text-burgundy/60 transition-colors group-hover:text-gold group-focus-visible:text-gold group-active:text-gold">
                            {path.label}
                        </span>

                        <h3 className="mt-4 font-serif text-2xl text-burgundy transition-colors group-hover:text-gold group-focus-visible:text-gold group-active:text-gold">
                            {path.title}
                        </h3>

                        <p className="mt-4 leading-relaxed text-charcoal/70 transition-colors group-hover:text-cream/80 group-focus-visible:text-cream/80 group-active:text-cream/80">
                            {path.description}
                        </p>

                        <span className="mt-auto pt-8 font-semibold text-burgundy transition-colors group-hover:text-gold group-focus-visible:text-gold group-active:text-gold">
                            {path.action}
                            <span className="ml-2" aria-hidden="true">
                            →
                            </span>
                        </span>
                        </a>
                    </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}