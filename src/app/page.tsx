import { Header } from "@/components/layout/header";
import { siteConfig } from "@/data/site";
import {Hero} from "@/components/sections/hero"

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-cream text-charcoal">
        <Hero title={siteConfig.shortName} tagline={siteConfig.tagline} />
      </main>
    </>
  );
}