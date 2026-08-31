import { Header } from "@/components/layout/header";
import { siteConfig } from "@/data/site";
import {Hero} from "@/components/sections/hero";
import { StatisticsStrip } from "@/components/sections/statistics-strip";
import { VisitorPathSelector } from "@/components/sections/visitor-path-selector";
import { UpcomingPerformance } from "@/components/sections/upcoming-performance";
import { OrchestraToday } from "@/components/sections/orchestra-today";
import { ArchiveTimeline } from "@/components/sections/archive-timeline";
import { LivingArchiveCta } from "@/components/sections/living-archive-cta";
import { JoinOrchestra } from "@/components/sections/join-orchestra";
import { SupportOrchestra } from "@/components/sections/support-orchestra";
import { VideoSection } from "@/components/sections/video-section";
import { PartnersStrip } from "@/components/sections/partners-strip";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream text-charcoal">
        <Hero title={siteConfig.shortName} tagline={siteConfig.tagline} />
        <VisitorPathSelector />
        <UpcomingPerformance />
        <StatisticsStrip />
        <OrchestraToday />
        <ArchiveTimeline />
        <LivingArchiveCta />
        <JoinOrchestra />
        <SupportOrchestra />
        <VideoSection />
        <PartnersStrip />
      </main>
    </>
  );
}