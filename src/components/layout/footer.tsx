import { Container } from "@/components/ui/container";

type FooterProps = {
  name: string;
  navigation: ReadonlyArray<{
    label: string;
    href: string;
  }>;
};

export function Footer({ name, navigation }: FooterProps) {
  return (
    <footer className="bg-burgundy text-cream">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-[2fr_1fr_1fr] lg:gap-10">
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <a
              href="#hero"
              className="inline-block rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <span className="block font-serif text-xl">
                {name}
              </span>

              <span className="mt-1 block text-xs tracking-wide text-cream/60">
                Žrnovnica · od 1911.
              </span>
            </a>

            <p className="mt-6 font-serif text-lg italic text-cream/60">
              115 godina glazbe, zajedništva i tradicije.
            </p>
          </div>

          <nav aria-label="Navigacija u podnožju">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block rounded py-2 text-sm text-cream/65 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 justify-self-end">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">
              Kontakt
            </h2>

            <address className="mt-5 space-y-3 text-sm not-italic text-cream/65">
              <p className="italic">E-mail: za potvrdu</p>
              <p className="italic">Telefon: za potvrdu</p>
              <p>Žrnovnica, Hrvatska</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gold/20 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {name} Žrnovnica. Sva prava pridržana.
          </p>

          <button
            type="button"
            disabled
            className="min-h-11 shrink-0 self-start text-left disabled:cursor-not-allowed sm:self-auto"
          >
            Pravila privatnosti
          </button>
        </div>
      </Container>
    </footer>
  );
}