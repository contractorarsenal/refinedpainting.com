import { Route, Routes } from "react-router-dom";
import { ConversionTracking } from "./components/layout/ConversionTracking";
import { FloatingContactButton } from "./components/layout/FloatingContactButton";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { MobileCTABar } from "./components/layout/MobileCTABar";
import { RouteAnalytics } from "./components/layout/RouteAnalytics";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { PromoPopupProvider } from "./components/promo/PromoPopupContext";
import { QuoteModalProvider } from "./components/quote/QuoteModalContext";
import { AboutPage } from "./pages/AboutPage";
import { BlogCategoryPage } from "./pages/BlogCategoryPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { ContactPage } from "./pages/ContactPage";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ThankYouPage } from "./pages/ThankYouPage";

function App() {
  return (
    <QuoteModalProvider>
      <PromoPopupProvider>
        <ScrollToTop />
        <RouteAnalytics />
        <ConversionTracking />
        <Header />
        <main className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/category/:slug" element={<BlogCategoryPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
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
