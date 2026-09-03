import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Pravila privatnosti | HGD Stjepan Radić",
  description:
    "Informacije o obradi i zaštiti osobnih podataka na web stranici HGD-a Stjepan Radić Žrnovnica.",
};

type PolicySectionProps = {
  title: string;
  children: ReactNode;
};

function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="border-t border-gold/30 pt-8">
      <h2 className="font-serif text-2xl text-burgundy md:text-3xl">
        {title}
      </h2>

      <div className="mt-4 space-y-4 leading-relaxed text-charcoal/75">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <header className="border-b border-burgundy/10 bg-cream">
        <Container className="flex min-h-20 items-center justify-between gap-6">
          <Link
            href="/#hero"
            className="font-serif text-lg font-semibold text-burgundy"
          >
            HGD &quot;Stjepan Radić&quot;
          </Link>

          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded border border-gold px-4 py-2 text-sm font-semibold text-burgundy transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            ← Povratak na stranicu
          </Link>
        </Container>
      </header>

      <Container className="py-16 md:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            Zaštita osobnih podataka
          </p>

          <h1 className="mt-5 font-serif text-4xl italic text-burgundy md:text-6xl">
            Pravila privatnosti
          </h1>

          <p className="mt-6 leading-relaxed text-charcoal/70">
            Ova pravila objašnjavaju koje osobne podatke možemo obrađivati
            prilikom korištenja web stranice HGD-a &quot;Stjepan Radić&quot;
            Žrnovnica, u koje svrhe ih koristimo i koja prava imate.
          </p>

          <div className="mt-8 rounded-lg border-2 border-gold bg-paper p-5">
            <p className="font-semibold text-burgundy">
              Radna demonstracijska verzija
            </p>

            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
              Obrasci na ovoj verziji stranice trenutačno ne šalju niti
              pohranjuju unesene podatke. Pravila je potrebno ažurirati prije
              aktivacije obrazaca, obavijesti e-poštom ili drugih vanjskih
              usluga.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            <PolicySection title="1. Voditelj obrade">
              <p>
                Voditelj obrade osobnih podataka bit će:
              </p>

              <address className="not-italic">
                <p>
                  <strong>HGD &quot;Stjepan Radić&quot; Žrnovnica</strong>
                </p>
                <p>Sjedište i adresa: za potvrdu</p>
                <p>E-mail za pitanja o privatnosti: za potvrdu</p>
              </address>

              <p className="text-sm italic">
                Ove podatke prije objave mora potvrditi uprava društva.
              </p>
            </PolicySection>

            <PolicySection title="2. Koje podatke obrađujemo">
              <p>
                Ovisno o načinu korištenja stranice, možemo obrađivati:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>ime i prezime;</li>
                <li>e-mail adresu ili broj telefona;</li>
                <li>sadržaj poruke ili prijedloga;</li>
                <li>
                  podatke i fotografije dobrovoljno dostavljene za arhiv;
                </li>
                <li>
                  podatke povezane s prijedlogom donacije, pomoći ili
                  partnerstva;
                </li>
                <li>
                  tehničke podatke poput IP adrese, vrste preglednika i
                  zapisa o pogreškama koje može obrađivati pružatelj hostinga.
                </li>
              </ul>

              <p>
                U trenutačnoj demonstracijskoj verziji podaci uneseni u
                obrasce ostaju samo u pregledniku i ne šalju se poslužitelju.
              </p>
            </PolicySection>

            <PolicySection title="3. Svrhe i pravna osnova obrade">
              <p>Podaci se nakon aktivacije obrazaca mogu koristiti za:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>odgovaranje na kontaktne upite;</li>
                <li>dogovaranje dolaska na probu;</li>
                <li>razgovor o donacijama, pomoći i partnerstvu;</li>
                <li>provjeru materijala predloženih za arhiv;</li>
                <li>
                  slanje obavijesti o koncertu, samo uz prethodno danu
                  privolu;
                </li>
                <li>sigurnost i tehničko održavanje stranice.</li>
              </ul>

              <p>
                Pravna osnova može biti vaša privola, poduzimanje radnji na
                vaš zahtjev ili legitimni interes društva da odgovori na upit
                i zaštiti web stranicu.
              </p>

              <p>
                Privolu možete povući u bilo kojem trenutku. Povlačenje
                privole ne utječe na zakonitost obrade provedene prije njezina
                povlačenja.
              </p>
            </PolicySection>

            <PolicySection title="4. Obrasci i obavijesti e-poštom">
              <p>
                Kontaktni obrazac, obrazac za arhiv, obrazac za podršku i
                prijava za obavijest o koncertu trenutačno služe samo kao
                demonstracija.
              </p>

              <p>
                Prije njihove aktivacije ova će pravila biti dopunjena
                informacijama o pružatelju usluge slanja poruka, rokovima
                čuvanja i načinu odjave od obavijesti.
              </p>

              <p>
                Podaci za jednu vrstu upita neće se koristiti za marketinške
                poruke bez zasebne i izričite privole.
              </p>
            </PolicySection>

            <PolicySection title="5. Fotografije i arhivski materijali">
              <p>
                Fotografije, imena i informacije koje posjetitelji predlože
                za arhiv neće se automatski objavljivati. Uprava orkestra
                treba ih prethodno pregledati i potvrditi.
              </p>

              <p>
                Osoba koja šalje materijal treba imati pravo podijeliti ga i
                ne smije slati sadržaj koji neopravdano narušava privatnost
                drugih osoba.
              </p>

              <p>
                Materijali koji uključuju djecu neće se objavljivati bez
                odgovarajućeg odobrenja roditelja ili zakonskog skrbnika.
              </p>
            </PolicySection>

            <PolicySection title="6. YouTube i vanjske usluge">
              <p>
                Stranica može prikazivati videozapise putem usluge YouTube.
                Kada korisnik pokrene video, preglednik se povezuje s
                poslužiteljima društva Google, koje može obrađivati tehničke
                podatke i postavljati vlastite kolačiće.
              </p>

              <p>
                Više informacija dostupno je u{" "}
                <a
                  href="https://policies.google.com/privacy?hl=hr"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-burgundy underline decoration-gold underline-offset-4"
                >
                  Googleovim pravilima privatnosti
                </a>
                .
              </p>

              <p>
                Društvo ne upravlja načinom na koji YouTube obrađuje podatke
                nakon što korisnik pokrene vanjski sadržaj.
              </p>
            </PolicySection>

            <PolicySection title="7. Kolačići">
              <p>
                Sama demonstracijska stranica ne koristi analitičke ili
                oglašivačke kolačiće.
              </p>

              <p>
                Vanjske usluge, primjerice YouTube, mogu koristiti vlastite
                kolačiće nakon pokretanja njihovog sadržaja. Ako kasnije budu
                uvedeni analitika ili dodatni kolačići, bit će dodana
                odgovarajuća obavijest i mogućnost izbora.
              </p>
            </PolicySection>

            <PolicySection title="8. Primatelji i čuvanje podataka">
              <p>
                Osobni podaci ne prodaju se trećim osobama. Nakon aktivacije
                funkcionalnosti mogu ih obrađivati ovlašteni članovi društva
                te pružatelji hostinga, e-pošte ili drugih tehničkih usluga
                potrebnih za rad stranice.
              </p>

              <p>
                Podaci će se čuvati samo onoliko dugo koliko je potrebno za
                odgovor na upit ili ostvarenje svrhe zbog koje su prikupljeni,
                osim kada je dulje čuvanje propisano zakonom.
              </p>
            </PolicySection>

            <PolicySection title="9. Vaša prava">
              <p>U skladu s primjenjivim propisima možete zatražiti:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>pristup svojim osobnim podacima;</li>
                <li>ispravak netočnih ili nepotpunih podataka;</li>
                <li>brisanje podataka kada za obradu više nema osnove;</li>
                <li>ograničenje obrade;</li>
                <li>prigovor na obradu;</li>
                <li>prenosivost podataka, kada je primjenjiva;</li>
                <li>povlačenje ranije dane privole.</li>
              </ul>

              <p>
                Za ostvarivanje prava možete se obratiti na kontakt za
                privatnost naveden u prvom odjeljku.
              </p>

              <p>
                Također imate pravo podnijeti pritužbu{" "}
                <a
                  href="https://azop.hr/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-burgundy underline decoration-gold underline-offset-4"
                >
                  Agenciji za zaštitu osobnih podataka
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection title="10. Izmjene pravila">
              <p>
                Pravila se mogu mijenjati kada se promijeni način rada
                stranice, uvedu nove usluge ili to zahtijevaju propisi.
                Ažurirana verzija bit će objavljena na ovoj stranici.
              </p>

              <p>
                <strong>Posljednje ažuriranje:</strong> 3. rujna 2026.
              </p>
            </PolicySection>
          </div>

          <div className="mt-14">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded bg-burgundy px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-burgundy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Povratak na početnu stranicu
            </Link>
          </div>
        </article>
      </Container>
    </main>
  );
}