// Futuristic Layout
import { FloatingDock } from './components/layout/FloatingDock';
import { FutureHero } from './components/home/FutureHero';
import { AdaptiveSection } from './components/home/AdaptiveSection';
import { LiveTest } from './components/home/LiveTest';
import { FuturePricing } from './components/home/FuturePricing';
import { FutureContact } from './components/home/FutureContact';
import { FutureCTA } from './components/home/FutureCTA';
import { HeroProvider } from './contexts/HeroContext';

function App() {
  return (
    <HeroProvider>
      <div className="bg-[#05050A] text-white font-['Satoshi'] selection:bg-purple-500 selection:text-white h-screen w-full snap-container overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">

        <FloatingDock />

        <main>
          <FutureHero />
          <AdaptiveSection />
          <LiveTest />
          <FuturePricing />
          <FutureContact />
          <FutureCTA />
        </main>

      </div>
    </HeroProvider>
  )
}

export default App
