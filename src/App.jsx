import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Home from './Home';

import AdminPanel from './Components/AdminPanel';
import { initializeSEO, updatePageMeta } from './utils/seoOptimizations';
import './App.css';

// Add Lucide icons for professional UI
import { Info, ShoppingCart, Shield } from 'lucide-react';
import CancellationAndRefundsPolicy from './Components/policies/CancellationAndRefundsPolicy';
import ContactUs from './Components/policies/ContactUs';
import PricingPage from './Components/policies/PricingPage';
import PrivacyPolicy from './Components/policies/PrivacyPolicy';
import Shipping from  './Components/policies/Shipping';
import TermsAndConditions from './Components/policies/TermsAndConditions';

const pageLinks = [
  { path: '/', label: 'Home', icon: <Home size={18} /> },
  { path: '/about', label: 'About', icon: <Info size={18} /> },
  { path: '/checkout', label: 'Checkout', icon: <ShoppingCart size={18} /> },
  { path: '/admin', label: 'Admin', icon: <Shield size={18} /> },
];

const PageTransition = ({ children }) => {
  const location = useLocation();
  
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  
  // Initialize SEO optimizations
  useEffect(() => {
    initializeSEO();
  }, []);
  
  // Update page meta based on route
  useEffect(() => {
    const pageMeta = {
      '/': {
        title: 'Neelkanth Palangtod Capsules - Natural Ayurvedic Strength Enhancement | 100% Herbal',
        description: 'Boost your energy, stamina & performance naturally with Neelkanth Palangtod Capsules. 100% Ayurvedic formula with Ashwagandha, Shilajit & Safed Musli. No side effects. Order now!',
        keywords: 'ayurvedic capsules, natural strength enhancement, stamina booster, energy pills, ashwagandha, shilajit, safed musli'
      },
      '/privacy-policy': {
        title: 'Privacy Policy - Neelkanth Palangtod Capsules',
        description: 'Read our comprehensive privacy policy to understand how we protect your personal information when you purchase Neelkanth Palangtod Capsules.',
        keywords: 'privacy policy, data protection, personal information'
      },
      '/terms': {
        title: 'Terms and Conditions - Neelkanth Palangtod Capsules',
        description: 'Terms and conditions for purchasing and using Neelkanth Palangtod Capsules. Read our policies before making a purchase.',
        keywords: 'terms and conditions, purchase policy, usage terms'
      },
      '/shipping': {
        title: 'Shipping Policy - Neelkanth Palangtod Capsules',
        description: 'Learn about our shipping policy, delivery times, and shipping charges for Neelkanth Palangtod Capsules orders across India.',
        keywords: 'shipping policy, delivery, shipping charges, India delivery'
      },
      '/cancellation-refunds': {
        title: 'Cancellation & Refunds - Neelkanth Palangtod Capsules',
        description: 'Our cancellation and refund policy for Neelkanth Palangtod Capsules. Learn about return procedures and refund timelines.',
        keywords: 'cancellation policy, refunds, return policy, money back guarantee'
      },
      '/contact': {
        title: 'Contact Us - Neelkanth Palangtod Capsules',
        description: 'Get in touch with us for any queries about Neelkanth Palangtod Capsules. Customer support, product information, and assistance.',
        keywords: 'contact us, customer support, help, queries'
      }
    };
    
    const currentPageMeta = pageMeta[currentPath] || pageMeta['/'];
    updatePageMeta(currentPageMeta.title, currentPageMeta.description, currentPageMeta.keywords);
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-white">
      {/* Only show navbar for non-admin/checkout pages */}
      
      {/* Page navigation links */}
     
      {/* Main content with page transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Home/>
            </PageTransition>
          } />
          <Route path="/admin" element={
            <PageTransition>
              <AdminPanel />
            </PageTransition>
          } />
          <Route path="/cancellation-refunds" element={
            <PageTransition>
              <CancellationAndRefundsPolicy />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <ContactUs />
            </PageTransition>
          } />
          {/* <Route path="/pricing" element={
            <PageTransition>
              <PricingPage />
            </PageTransition>
          } /> */}
          <Route path="/privacy-policy" element={
            <PageTransition>
              <PrivacyPolicy />
            </PageTransition>
          } />
          <Route path="/shipping" element={
            <PageTransition>
              <Shipping />
            </PageTransition>
          } />
          <Route path="/terms" element={
            <PageTransition>
              <TermsAndConditions />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>

      {/* Global CTA Button for non-admin/checkout pages */}
      {currentPath !== '/admin' && currentPath !== '/checkout' && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
           <div className='flex  gap-2'>
          <motion.a
            href="tel:+917401307307"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-bold text-base flex items-center gap-2"
            aria-label="Call us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064a2 2 0 01-.45 1.947l-1.27 1.27a16.001 16.001 0 006.586 6.586l1.27-1.27a2 2 0 011.947-.45l2.064.516A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
            </svg>
            
          </motion.a>
          {/* WhatsApp CTA */}
          <motion.a
            href="https://wa.me/917401307307"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-bold text-base flex items-center gap-2"
            aria-label="Chat on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.36 7.09L4 29l7.18-2.31A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.27 1.37 1.4-4.15-.25-.4A9.97 9.97 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.14.18 1.93 2.95 4.68 4.02.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/>
            </svg>
           
          </motion.a>
          </div>
          {/* Buy Now CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              to="#checkout"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center gap-2"
            >
              <span>Buy Now</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </Link>
          </motion.div>
          {/* Phone CTA */}
         
        </div>
      )}

      {/* Background particles effect for home page */}
      {currentPath === '/' && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-200 rounded-full opacity-20"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
