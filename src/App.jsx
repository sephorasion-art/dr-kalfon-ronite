import { Toaster } from "@/components/ui/toaster"
import { Toaster as SonnerToaster } from "@/components/ui/sonner"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { LanguageProvider } from '@/lib/LanguageContext';

import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Luxopuncture from './pages/Luxopuncture';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

const PublicPages = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/luxopuncture" element={<Luxopuncture />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <PublicPages />
      </Router>
      <Toaster />
      <SonnerToaster position="top-center" richColors />
    </LanguageProvider>
  )
}

export default App
