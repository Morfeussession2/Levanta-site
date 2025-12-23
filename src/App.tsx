// Futuristic Layout
import { FloatingDock } from './components/layout/FloatingDock';
import { FutureHero } from './components/home/FutureHero';
import { AdaptiveSection } from './components/home/AdaptiveSection';
import { AboutLevanta } from './components/home/AboutLevanta';
import { LiveTest } from './components/home/LiveTest';
import { FuturePricing } from './components/home/FuturePricing';
import { FutureContact } from './components/home/FutureContact';
import { FutureCTA } from './components/home/FutureCTA';
import { HeroProvider } from './contexts/HeroContext';
import { LevantaPerks } from './components/home/LevantaPerks';
import { TrustedBy } from './components/home/TrustedBy';
import { PlatformIntro } from './components/home/PlatformIntro';

function App() {
  return (
    <HeroProvider>
      <div className="bg-[#05050A] text-white font-['Satoshi'] selection:bg-purple-500 selection:text-white h-screen w-full snap-container overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">

        <FloatingDock />

        <main>
          <FutureHero />
          <AdaptiveSection />
          <LevantaPerks />
          <PlatformIntro />
          <AboutLevanta />
          <LiveTest />
          <TrustedBy />
          <FuturePricing />
          <FutureContact />
          <FutureCTA />
        </main>

      </div>
    </HeroProvider>
  )
}

export default App
