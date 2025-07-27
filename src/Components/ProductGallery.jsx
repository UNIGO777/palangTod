import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductImage from '../assets/ProductImage.png';
import { ChevronLeft, ChevronRight, ZoomIn, Heart } from 'lucide-react';

// This will be filled with actual image imports later
const ProductGallery = () => {
  // Placeholder for product images - these will be replaced with actual imports later
  const images = [
    { 
      id: 1, 
      src: ProductImage, 
      alt: 'Neelkanth Palangtod Capsule Bottle',
      caption: 'Premium Quality Packaging'
    },
    { 
      id: 2, 
      src: 'https://plus.unsplash.com/premium_photo-1684786776985-2c73c84d2831', 
      alt: 'Herbal ingredients for Palangtod',
      caption: 'Natural Ayurvedic Ingredients'
    },
    { 
      id: 3, 
      src: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70', 
      alt: 'Herbs and capsules',
      caption: 'Powerful Herbal Formulation'
    },
    { 
      id: 4, 
      src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3', 
      alt: 'Happy couple embracing',
      caption: 'Experience Enhanced Intimacy'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-r from-red-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800"
        >
          Experience the <span className="text-red-600">Power</span> of Palangtod
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden bg-white shadow-xl">
            {/* Main image */}
            <div 
              className={`relative aspect-[4/3] cursor-pointer transition-all duration-500 ${isZoomed ? 'scale-150' : 'scale-100'}`}
              onClick={toggleZoom}
            >
              <motion.img
                key={currentIndex}
                initial="hidden"
                animate="visible"
                variants={fadeVariants}
                transition={{ duration: 0.5 }}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-contain"
              />
              
              {/* Zoom icon */}
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white">
                <ZoomIn size={20} />
              </div>
              
              {/* Arrows for navigation */}
              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white"
                onClick={(e) => {e.stopPropagation(); prevSlide();}}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white"
                onClick={(e) => {e.stopPropagation(); nextSlide();}}
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Caption */}
            <div className="p-4 bg-gradient-to-r from-red-600 to-pink-600 text-white text-center">
              <p className="text-lg font-medium">{images[currentIndex].caption}</p>
            </div>
            
            {/* Thumbnails */}
            <div className="flex p-2 bg-gray-100 overflow-x-auto">
              {images.map((image, index) => (
                <div 
                  key={image.id} 
                  className={`w-20 h-20 flex-shrink-0 mx-1 rounded overflow-hidden cursor-pointer border-2 ${index === currentIndex ? 'border-red-500' : 'border-transparent'}`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img 
                    src={image.src} 
                    alt={`Thumbnail ${index+1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product benefits highlights */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🔥', text: 'Intense Performance' },
              { icon: '⏱️', text: 'Longer Duration' },
              { icon: '💪', text: 'Enhanced Strength' },
              { icon: '❤️', text: 'Better Satisfaction' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-3 text-center shadow-md"
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="text-gray-800 text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <a 
              href="#checkout" 
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-full text-white font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Heart className="mr-2" size={20} /> Experience the Difference
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery; 