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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            to="#checkout"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center gap-2"
          >
            <span>Buy Now</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </Link>
        </motion.div>
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
