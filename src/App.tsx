import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import Mandats from "./pages/Mandats";
import Situations from "./pages/Situations";
import Doctrine from "./pages/Doctrine";
import Contact from "./pages/Contact";
import Urgence from "./pages/Urgence";
import Actualites from "./pages/Actualites";
import VeilleComplete from "./pages/VeilleComplete";
import MentionsLegales from "./pages/MentionsLegales";
import Cookies from "./pages/Cookies";
import Confidentialite from "./pages/Confidentialite";
import CookieBanner from "./components/CookieBanner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LangSync = () => {
  const { language } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = language === 'fr' ? 'fr' : 'en';
  }, [language]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <LangSync />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <CookieBanner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mandats" element={<Mandats />} />
            <Route path="/situations" element={<Situations />} />
            <Route path="/doctrine" element={<Doctrine />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/urgence" element={<Urgence />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/veille-complete" element={<VeilleComplete />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
