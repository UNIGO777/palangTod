import React from 'react'
import { motion } from 'framer-motion'
import heroBg from '../assets/HeroImage.png'
import productImage from '../assets/ProductImage.png'

// You can replace this with your own image in the public folder or use an external URL
const HERO_BG_IMAGE = heroBg; // Place your image in public/hero-bg.jpg or use a URL

const Hero = () => {
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  const formVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  }

  const textContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  // Fade-in animation for the background image
  const bgFadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
  }

  return (
    <main>
      <section className="relative text-white flex items-center justify-between min-h-[70vh] overflow-hidden py-12 sm:py-16 lg:py-20" aria-labelledby="hero-heading">
        {/* Animated Background Image */}
        <motion.div
          variants={bgFadeVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 w-full h-full bg-black"
          style={{
            backgroundImage: `url(${HERO_BG_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          role="img"
          aria-label="Neelkanth Palangtod Capsules - Natural Ayurvedic strength enhancement background"
        />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          <motion.div
            variants={textContainerVariants}
            initial="initial"
            animate="animate"
            className="w-full lg:w-3/5 "
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col items-center">
                <motion.h1 
                  id="hero-heading"
                  variants={textVariants}
                  className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-red-700 mb-2 uppercase text-center"
                >
                  HARDER
                </motion.h1>
                <motion.p 
                  variants={textVariants}
                  className="text-white text-base sm:text-lg lg:text-xl text-center"
                >
                  ERECTIONS
                </motion.p>
              </div>
              
              <div className="flex flex-col ml-12 items-center">
                <motion.h1 
                  variants={textVariants}
                  className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-red-700 mb-2 uppercase text-center"
                >
                  LONGER
                </motion.h1>
                <motion.p 
                  variants={textVariants}
                  className="text-white text-base sm:text-lg lg:text-xl text-center"
                >
                  ORGASMS
                </motion.p>
              </div>
              
              <div className="flex flex-col items-center">
                <motion.h1 
                  variants={textVariants}
                  className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-red-700 mb-2 uppercase text-center"
                >
                  WILD
                </motion.h1>
                <motion.p 
                  variants={textVariants}
                  className="text-white text-base sm:text-lg lg:text-xl text-center"
                >
                  PLEASURE
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={formVariants}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm lg:w-2/5 bg-red-700 bg-opacity-90 p-6 rounded-lg shadow-xl"
          >
            <motion.h2 
              variants={textVariants}
              className="text-2xl sm:text-3xl font-bold uppercase mb-4 text-center"
            >
              BUY NOW
            </motion.h2>
            <motion.div
              variants={textVariants}
              className="flex flex-col items-center gap-3 mb-6"
            >
              <span className="text-3xl sm:text-4xl font-bold">₹449</span>
              <span className="text-base sm:text-lg line-through opacity-75">₹998</span>
              <span className="bg-black text-white px-3 py-1 rounded text-sm sm:text-base">55% OFF</span>
            </motion.div>
            <motion.ul
              variants={textVariants}
              className="mb-6 space-y-2 text-sm sm:text-base"
            >
              <li className="flex items-center gap-2">
                <span>✓</span> Premium Quality
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span> Fast Delivery
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span> 30-Day Money Back
              </li>
            </motion.ul>
            <motion.a
              href="#checkout"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full bg-black text-white font-bold py-3 rounded hover:bg-gray-800 uppercase text-center text-sm sm:text-base"
              aria-label="Buy Neelkanth Palangtod Capsules now - Go to checkout"
            >
              Buy Now
            </motion.a>
          </motion.div>
        </div>
      </div>
      </section>
    </main>
  )
}

export default Hero