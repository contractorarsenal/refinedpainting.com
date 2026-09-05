import { FloatingContactButton } from "./components/layout/FloatingContactButton";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { MobileCTABar } from "./components/layout/MobileCTABar";
import { PromoPopupProvider } from "./components/promo/PromoPopupContext";
import { QuoteModalProvider } from "./components/quote/QuoteModalContext";
import { BeforeAfter } from "./components/sections/BeforeAfter";
import { DontKnowWhereToStart } from "./components/sections/DontKnowWhereToStart";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Gallery } from "./components/sections/Gallery";
import { Hero } from "./components/sections/Hero";
import { LocalTrustedPartner } from "./components/sections/LocalTrustedPartner";
import { PNWDifference } from "./components/sections/PNWDifference";
import { Process } from "./components/sections/Process";
import { PromoBanner } from "./components/sections/PromoBanner";
import { Reviews } from "./components/sections/Reviews";
import { ServiceAreaStrip } from "./components/sections/ServiceAreaStrip";
import { Services } from "./components/sections/Services";
import { TrustStrip } from "./components/sections/TrustStrip";

function App() {
  return (
    <QuoteModalProvider>
      <PromoPopupProvider>
        <Header />
        <main className="pb-20 sm:pb-0">
          <Hero />
          <TrustStrip />
          <Reviews />
          <Services />
          <LocalTrustedPartner />
          <PromoBanner />
          <ServiceAreaStrip />
          <DontKnowWhereToStart />
          <PNWDifference />
          <Process />
          <BeforeAfter />
          <Gallery />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <MobileCTABar />
        <FloatingContactButton />
      </PromoPopupProvider>
    </QuoteModalProvider>
  );
}

export default App;
