import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Package } from 'lucide-react';

const FullPageLoader = ({ isVisible, message = "Processing your order..." }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          style={{ zIndex: 9999 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm mx-4 text-center"
          >
            {/* Animated Logo */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
              }}
              className="mb-6 flex justify-center"
            >
              <div className="relative">
                <Package className="w-12 h-12 text-red-600" />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1"
                >
                  <Loader2 className="w-6 h-6 text-red-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Loading Text */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Please Wait
            </h3>
            <p className="text-gray-600 mb-4">
              {message}
            </p>

            {/* Progress Dots */}
            <div className="flex justify-center space-x-1">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  className="w-2 h-2 bg-red-600 rounded-full"
                />
              ))}
            </div>

            {/* Loading Bar */}
            <div className="mt-6 w-full bg-gray-200 rounded-full h-1">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullPageLoader;