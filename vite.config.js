import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Performance optimizations
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          animation: ['framer-motion'],
          icons: ['lucide-react'],
          router: ['react-router-dom'],
          toast: ['react-toastify']
        }
      }
    },
    
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    
    // Enable source maps for debugging (disable in production if needed)
    sourcemap: false,
    
    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb as base64
  },
  
  // Development server optimizations
  server: {
    // Enable HTTP/2
    https: false,
    // Hot reload optimization
    hmr: {
      overlay: false
    }
  },
  
  // CSS optimization
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      // Add any CSS preprocessor options here
    }
  },
  
  // Asset optimization
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
  
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'react-toastify'
    ],
    exclude: [
      // Exclude any problematic dependencies
    ]
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: true,
  },
  
  // Base configuration for deployment
  base: './',
})