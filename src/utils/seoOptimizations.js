/**
 * SEO Optimization Utilities
 * Collection of functions to enhance SEO performance
 */

// Lazy loading for images
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    { href: '/assets/HeroImage.png', as: 'image' },
    { href: '/assets/ProductImage.png', as: 'image' },
    { href: 'https://checkout.razorpay.com/v1/checkout.js', as: 'script' },
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.as === 'image') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Update page title and meta description dynamically
export const updatePageMeta = (title, description, keywords = '') => {
  // Update title
  document.title = title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
  
  // Update meta keywords if provided
  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }
  
  // Update Open Graph tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }
  
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }
  
  // Update Twitter tags
  let twitterTitle = document.querySelector('meta[property="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', title);
  }
  
  let twitterDescription = document.querySelector('meta[property="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', description);
  }
};

// Add structured data for FAQ
export const addFAQStructuredData = (faqs) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(faqSchema);
  document.head.appendChild(script);
};

// Add review structured data
export const addReviewStructuredData = (reviews) => {
  reviews.forEach(review => {
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Product",
        "name": "Neelkanth Palangtod Capsules"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.text
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(reviewSchema);
    document.head.appendChild(script);
  });
};

// Optimize images for better Core Web Vitals
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Add loading="lazy" if not already present
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add proper dimensions if missing
    if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
      img.onload = function() {
        if (!this.hasAttribute('width')) {
          this.setAttribute('width', this.naturalWidth);
        }
        if (!this.hasAttribute('height')) {
          this.setAttribute('height', this.naturalHeight);
        }
      };
    }
  });
};

// Monitor Core Web Vitals
export const monitorCoreWebVitals = () => {
  if (typeof window !== 'undefined') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((metric) => {
        console.log('CLS:', metric);
        // Send to analytics if needed
      });
      getFID((metric) => {
        console.log('FID:', metric);
        // Send to analytics if needed
      });
      getFCP((metric) => {
        console.log('FCP:', metric);
        // Send to analytics if needed
      });
      getLCP((metric) => {
        console.log('LCP:', metric);
        // Send to analytics if needed
      });
      getTTFB((metric) => {
        console.log('TTFB:', metric);
        // Send to analytics if needed
      });
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error);
    });
  }
};

// Initialize all SEO optimizations
export const initializeSEO = () => {
  // Run on DOM content loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      lazyLoadImages();
      optimizeImages();
      preloadCriticalResources();
    });
  } else {
    lazyLoadImages();
    optimizeImages();
    preloadCriticalResources();
  }
  
  // Monitor performance
  monitorCoreWebVitals();
};