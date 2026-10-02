import { Route, Routes } from "react-router-dom";
import { FloatingContactButton } from "./components/layout/FloatingContactButton";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { MobileCTABar } from "./components/layout/MobileCTABar";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { PromoPopupProvider } from "./components/promo/PromoPopupContext";
import { QuoteModalProvider } from "./components/quote/QuoteModalContext";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ThankYouPage } from "./pages/ThankYouPage";

function App() {
  return (
    <QuoteModalProvider>
      <PromoPopupProvider>
        <ScrollToTop />
        <Header />
        <main className="pb-20 sm:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileCTABar />
        <FloatingContactButton />
      </PromoPopupProvider>
    </QuoteModalProvider>
  );
}

export default App;
