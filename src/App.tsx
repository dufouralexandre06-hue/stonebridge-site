import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import Mandats from "./pages/Mandats";
import Situations from "./pages/Situations";
import Doctrine from "./pages/Doctrine";
import Contact from "./pages/Contact";
import Urgence from "./pages/Urgence";
import MentionsLegales from "./pages/MentionsLegales";
import Cookies from "./pages/Cookies";
import CookieBanner from "./components/CookieBanner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
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
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
