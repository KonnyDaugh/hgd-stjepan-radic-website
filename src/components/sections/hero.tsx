import { Container } from "../ui/container"; 
import Image from "next/image";
import { SectionEyebrow } from "../ui/section-eyebrow";

type HeroProps = {
  title: string;
  tagline: string;
};

export function Hero({title, tagline}: HeroProps) {
    return (
        <section id="hero" className="relative flex min-h-screen items-end overflow-hidden pt-18 bg-burgundy text-cream">
            <Image
                src="/images/hero-orchestra.webp"
                alt=""
                fill
                preload
                sizes="100vw"
                className="object-cover object-center"
                />

                <div
                className="absolute inset-0 bg-linear-to-b from-burgundy/45 via-burgundy/75 to-charcoal/95"
                aria-hidden="true"
            />
            <Container className="relative z-10 pb-20 pt-32 md:pb-28 md:pt-40">
                <div className="max-w-3xl">
                    <SectionEyebrow>Žrnovnica · od 1911.</SectionEyebrow>
                    <h1 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">{title}</h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">{tagline}</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#pridruzi-se"
                            className="inline-flex items-center justify-center rounded bg-gold px-7 py-4 text-sm font-bold tracking-wide text-charcoal transition-colors hover:bg-gold-light"
                        >
                            Pridruži se orkestru
                        </a>

                        <a
                            href="#o-nama"
                            className="inline-flex items-center justify-center rounded border border-cream/35 px-7 py-4 text-sm font-medium tracking-wide text-cream transition-colors hover:border-gold"
                        >
                            Upoznaj orkestar
                        </a>
                    </div>
                </div>
            </Container>            
        </section>      
    )
}