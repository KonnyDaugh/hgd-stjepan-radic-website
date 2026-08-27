import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SectionEyebrow } from "../ui/section-eyebrow";

export function OrchestraToday() {
  return (
    <section
      id="o-nama"
      className="scroll-mt-24 bg-cream text-charcoal"
    >
      <Container className="py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
          <div className="max-w-xl">
            <SectionEyebrow>Orkestar danas</SectionEyebrow>

            <h2 className="mt-6 font-serif text-4xl italic leading-tight text-burgundy sm:text-5xl lg:text-6xl">
              Tradicija koju svaka generacija svira na svoj način.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-charcoal/75">
              Društvo danas okuplja oko 20 stalnih članova, a na
              većim koncertnim projektima surađuje i s gostujućim
              profesionalnim glazbenicima. Zajedno nastupamo na
              lokalnim proslavama, koncertima i gostovanjima izvan
              Žrnovnice.
            </p>

            <blockquote className="mt-10 border-l-4 border-gold pl-6 font-serif text-2xl italic text-burgundy">
              “Glazba nas okuplja, bez obzira na dob i iskustvo.”
            </blockquote>

            <a
              href="#pridruzi-se"
              className="group mt-10 inline-flex items-center gap-2 border-b border-gold pb-3 font-semibold text-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
            >
              Pridruži se orkestru

              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>

          <div className="grid gap-4">
            <div className="relative aspect-16/10 overflow-hidden rounded-lg">
              <Image
                src="/images/orchestra-today-main.webp"
                alt="Nastup HGD-a „Stjepan Radić“"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-5/4 overflow-hidden rounded-lg">
                <Image
                  src="/images/orchestra-today-detail-1.webp"
                  alt="Detalj s nastupa orkestra"
                  fill
                  sizes="(min-width: 1024px) 27vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-5/4 overflow-hidden rounded-lg">
                <Image
                  src="/images/orchestra-today-detail-2.webp"
                  alt="Glazbeni instrument u orkestru"
                  fill
                  sizes="(min-width: 1024px) 27vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}