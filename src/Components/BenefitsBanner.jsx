import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Heart, Award } from 'lucide-react';

const BenefitsBanner = () => {
  // Visual benefits with icons and descriptions
  const benefits = [
    {
      icon: <Zap size={28} className="text-red-600" />,
      title: "Maximum Power",
      description: "Feel stronger and more energetic"
    },
    {
      icon: <Clock size={28} className="text-red-600" />,
      title: "Long Lasting",
      description: "Extended performance duration"
    },
    {
      icon: <Heart size={28} className="text-red-600" />,
      title: "Enhanced Desire",
      description: "Rekindled passion and intensity"
    },
    {
      icon: <Award size={28} className="text-red-600" />,
      title: "Proven Results",
      description: "Thousands of satisfied customers"
    }
  ];

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-red-900 opacity-90"></div>
      
      {/* Background visual patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {/* Pattern 1: Circles */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={`circle-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5
            }}
          />
        ))}
        
        {/* Pattern 2: Lines */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={`line-${i}`}
            className="absolute bg-white"
            style={{
              height: '1px',
              width: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: Math.random() * 0.3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2">
            Experience The <span className="text-red-500">Ultimate</span> Performance
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Neelkanth Palangtod delivers real results that will transform your intimate life
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-black/60 to-red-900/60 backdrop-blur-sm p-4 rounded-xl border border-red-500/20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(220, 38, 38, 0.4)' }}
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-red-900/50 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-white font-bold mb-1 text-lg">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual separator */}
        <div className="relative mt-12 mb-8 flex justify-center">
          <div className="w-24 h-1 bg-red-600 rounded-full"></div>
        </div>

        {/* Visual callout */}
        <motion.div
          className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-6 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
            "Like Having The Energy Of Your 20s Again"
          </h3>
          <p className="text-gray-200 text-sm md:text-base">
            Join thousands of satisfied men who have rediscovered their vigor and confidence
          </p>
          
          <div className="mt-5">
            <a
              href="#checkout"
              className="inline-block bg-white text-red-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
        
        {/* Bottom decoration */}
       
      </div>
    </section>
  );
};

export default BenefitsBanner; 