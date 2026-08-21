import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-burgundy/10 bg-cream/95 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-6">
        <a
          href="#hero"
          aria-label={`Početna — ${siteConfig.shortName}`}
          className="flex shrink-0 flex-col"
        >
          <span className="font-serif text-lg font-semibold leading-none text-burgundy">
            {siteConfig.shortName}
          </span>

          <span className="mt-1 text-xs uppercase tracking-widest text-wine">
            {siteConfig.location} · od {siteConfig.foundedYear}.
          </span>
        </a>

        <nav
          aria-label="Glavna navigacija"
          className="hidden xl:block"
        >
          <ul className="flex items-center gap-1">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded px-3 py-2 text-sm font-medium text-burgundy transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#pridruzi-se"
          className="hidden min-h-11 shrink-0 items-center justify-center rounded border border-gold bg-burgundy px-5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:inline-flex"
        >
          Dođi na probu
        </a>
      </Container>
    </header>
  );
}