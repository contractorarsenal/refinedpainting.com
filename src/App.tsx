import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { MobileCTABar } from "./components/layout/MobileCTABar";
import { QuoteModalProvider } from "./components/quote/QuoteModalContext";
import { ColorConsult } from "./components/sections/ColorConsult";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Gallery } from "./components/sections/Gallery";
import { Hero } from "./components/sections/Hero";
import { PNWDifference } from "./components/sections/PNWDifference";
import { Positioning } from "./components/sections/Positioning";
import { Process } from "./components/sections/Process";
import { QuoteCTA } from "./components/sections/QuoteCTA";
import { Reviews } from "./components/sections/Reviews";
import { ServiceAreas } from "./components/sections/ServiceAreas";
import { Services } from "./components/sections/Services";
import { TrustStrip } from "./components/sections/TrustStrip";
import { WhyRefined } from "./components/sections/WhyRefined";

function App() {
  return (
    <QuoteModalProvider>
      <Header />
      <main className="pb-20 sm:pb-0">
        <Hero />
        <TrustStrip />
        <Positioning />
        <Services />
        <PNWDifference />
        <QuoteCTA />
        <Reviews />
        <Process />
        <ColorConsult />
        <Gallery />
        <WhyRefined />
        <ServiceAreas />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </QuoteModalProvider>
  );
}

export default App;
