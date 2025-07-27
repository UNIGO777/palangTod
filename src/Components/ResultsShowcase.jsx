import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

const ResultsShowcase = () => {
  // Customer testimonials with before/after descriptions
  const testimonials = [
    
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-900 to-red-900 text-white">
      <div className="container mx-auto px-4">
        {/* <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Real Results from Real Men
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See the transformation our customers have experienced with Neelkanth Palangtod Capsules
          </p>
        </motion.div> */}

        <div className="max-w-7xl mx-auto">
          {/* Testimonials with before/after descriptions */}
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-gradient-to-br from-black/40 to-red-900/40 backdrop-blur-sm rounded-xl p-6 border border-red-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(220, 38, 38, 0.4)' }}
              >
                {/* Rating stars */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < item.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-100 italic mb-6">"{item.quote}"</p>
                
                {/* Before/After Comparison */}
                <div className="bg-black/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <h4 className="text-sm text-red-300">BEFORE:</h4>
                  </div>
                  <p className="text-sm mb-4 text-gray-300">{item.beforeAfter.before}</p>
                  
                  <div className="flex justify-center my-1">
                    <ArrowRight className="text-red-500" />
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <h4 className="text-sm text-green-300">AFTER:</h4>
                  </div>
                  <p className="text-sm text-gray-300">{item.beforeAfter.after}</p>
                </div>
                
                {/* Customer info */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">{item.name}, {item.age}</p>
                  </div>
                  {item.verified && (
                    <span className="bg-green-900/50 text-green-400 text-xs px-2 py-1 rounded-full flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      Verified
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Before-After Showcase */}
          <motion.div
            className="mt-16 bg-black/30 rounded-xl p-6 sm:p-8 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Real Transformation Stories
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Two columns */}
              <div className='max-w-xl mx-auto'>
                <h4 className="text-xl font-semibold mb-2">Physical Benefits:</h4>
                <ul className="space-y-3 ">
                  {[
                    "Improved stamina and endurance",
                    "Enhanced muscular strength",
                    "Better energy levels throughout the day",
                    "Increased physical performance",
                    "Reduced physical fatigue"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="bg-red-500 rounded-full p-1 mr-3">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">Sexual Benefits:</h4>
                <ul className="space-y-3">
                  {[
                    "Enhanced libido and desire",
                    "Improved performance duration",
                    "Stronger and harder erections",
                    "Better control and confidence",
                    "Intensified pleasure and satisfaction"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                    >
                      <div className="bg-red-500 rounded-full p-1 mr-3">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Journey Timeline */}
            <div className="mt-12 px-8 md:px-20">
              <h4 className="text-xl font-semibold  mb-6 text-center">
                Your Journey to Enhanced Performance
              </h4>
              
              <div className="relative max-w-5xl">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-700"></div>
                
                {/* Timeline items */}
                {[
                  { week: "Week 1-2", desc: "Initial boost in energy and mood" },
                  { week: "Week 3-4", desc: "Noticeable improvement in stamina and performance" },
                  { week: "Week 5-8", desc: "Significant enhancement in strength and duration" },
                  { week: "Week 9-12", desc: "Complete transformation and maximum results" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`relative z-10 flex items-center mb-8 ${index % 2 === 0 ? 'justify-start md:justify-end' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className={`bg-gradient-to-r  from-red-800 to-red-600 rounded-lg p-4 max-w-xs relative
                      ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute top-1/2 transform -translate-y-1/2 
                        w-5 h-5 rounded-full bg-red-500 border-4 border-black
                        ${index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'}"
                      />
                      
                      <h5 className="font-bold ml-10 text-red-300 mb-1">{item.week}</h5>
                      <p className="text-sm ml-10 text-gray-200">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call To Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Experience the Transformation?
          </h3>
          <a 
            href="#checkout" 
            className="inline-block bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 
              text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-red-500/30 
              transition-all duration-300 transform hover:-translate-y-1"
          >
            Try Risk-Free Today
          </a>
          <p className="mt-3 text-gray-300 text-sm">
            100% Money-Back Guarantee • Free Shipping • Discreet Packaging
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsShowcase; 