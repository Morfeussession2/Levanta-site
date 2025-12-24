// Futuristic Layout
import { FloatingDock } from './components/layout/FloatingDock';
import { FutureHero } from './components/home/FutureHero';
import { AdaptiveSection } from './components/home/AdaptiveSection';
import { AboutLevanta } from './components/home/AboutLevanta';
import { LiveTest } from './components/home/LiveTest';
import { FuturePricing } from './components/home/FuturePricing';
import { FutureContact } from './components/home/FutureContact';
import { HeroProvider } from './contexts/HeroContext';
import { LevantaPerks } from './components/home/LevantaPerks';
import { TrustedBy } from './components/home/TrustedBy';
import { PlatformIntro } from './components/home/PlatformIntro';
import { Intermed } from './components/home/Intermed';

function App() {
  return (
    <HeroProvider>
      <div className="bg-[#05050A] text-white font-['Satoshi'] selection:bg-purple-500 selection:text-white h-screen w-full snap-container overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth relative">

        <FloatingDock />

        <main>
          <FutureHero />
          <AdaptiveSection />
          <LevantaPerks />
          <PlatformIntro />
          <Intermed />
          <AboutLevanta />
          <LiveTest />
          <FuturePricing />
          <TrustedBy />
          <FutureContact />
        </main>

      </div>
    </HeroProvider>
  )
}

export default App
