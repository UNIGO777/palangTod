import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "राजेश शर्मा",
      nameEn: "Rajesh Sharma",
      location: "दिल्ली",
      locationEn: "Delhi",
      age: 35,
      rating: 5,
      date: "2 महीने पहले",
      dateEn: "2 months ago",
      review: "3 महीने के उपयोग के बाद मुझे अविश्वसनीय परिणाम मिले हैं। ऊर्जा और सहनशक्ति में काफी सुधार हुआ है। पूर्णतः प्राकृतिक होने के कारण कोई साइड इफेक्ट नहीं।",
      reviewEn: "After 3 months of use, I got incredible results. Significant improvement in energy and stamina. Being completely natural, no side effects."
    },
    {
      id: 2,
      name: "अमित पटेल",
      nameEn: "Amit Patel",
      location: "अहमदाबाद",
      locationEn: "Ahmedabad",
      age: 42,
      rating: 5,
      date: "1 महीना पहले",
      dateEn: "1 month ago",
      review: "शुरुआत में संदेह था, लेकिन 6 सप्ताह बाद परिणाम देखकर बहुत खुश हूं। मानसिक तनाव कम हुआ है और आत्मविश्वास बढ़ा है। नीलकंठ फार्मेसी का धन्यवाद।",
      reviewEn: "Initially had doubts, but very happy seeing results after 6 weeks. Mental stress reduced and confidence increased. Thanks to Neelkanth Pharmacy."
    },
    {
      id: 3,
      name: "विकास कुमार",
      nameEn: "Vikas Kumar",
      location: "लखनऊ",
      locationEn: "Lucknow",
      age: 38,
      rating: 4,
      date: "3 सप्ताह पहले",
      dateEn: "3 weeks ago",
      review: "आयुर्वेदिक होने के कारण इस पर भरोसा किया। नियमित सेवन से शारीरिक कमजोरी दूर हो गई। अश्वगंधा और शिलाजीत का मिश्रण वाकई प्रभावी है।",
      reviewEn: "Trusted it because it's Ayurvedic. Regular consumption removed physical weakness. The combination of Ashwagandha and Shilajit is really effective."
    },
    {
      id: 4,
      name: "संजय गुप्ता",
      nameEn: "Sanjay Gupta",
      location: "कोलकाता",
      locationEn: "Kolkata",
      age: 45,
      rating: 5,
      date: "6 सप्ताह पहले",
      dateEn: "6 weeks ago",
      review: "40 की उम्र के बाद ऊर्जा की कमी महसूस कर रहा था। इस दवा ने जिंदगी बदल दी। अब फिर से 25 साल का जैसा महसूस करता हूं। बहुत बेहतरीन प्रोडक्ट।",
      reviewEn: "Was feeling lack of energy after 40. This medicine changed my life. Now I feel like 25 again. Excellent product."
    },
    {
      id: 5,
      name: "अशोक मिश्रा",
      nameEn: "Ashok Mishra",
      location: "भोपाल",
      locationEn: "Bhopal",
      age: 32,
      rating: 5,
      date: "5 सप्ताह पहले",
      dateEn: "5 weeks ago",
      review: "शादी के बाद परेशानी हो रही थी। दोस्त की सलाह पर यह लिया। 2 महीने में जबरदस्त फर्क। पत्नी भी खुश है। प्राकृतिक इलाज सबसे अच्छा है।",
      reviewEn: "Was having problems after marriage. Took this on friend's advice. Tremendous difference in 2 months. Wife is also happy. Natural treatment is the best."
    },
    {
      id: 6,
      name: "रवि जैन",
      nameEn: "Ravi Jain",
      location: "जयपुर",
      locationEn: "Jaipur",
      age: 29,
      rating: 4,
      date: "1 सप्ताह पहले",
      dateEn: "1 week ago",
      review: "जिम में परफॉर्मेंस बेहतर करने के लिए शुरू किया था। 3 महीने बाद स्टैमिना और मसल्स दोनों में इम्प्रूवमेंट। साइड इफेक्ट बिल्कुल नहीं।",
      reviewEn: "Started to improve gym performance. After 3 months, improvement in both stamina and muscles. Absolutely no side effects."
    }
  ];

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const testimonialVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-red-600">वास्तविक ग्राहक</span> समीक्षाएं
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            Real Customer Reviews
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            हजारों संतुष्ट ग्राहकों के अनुभव • Thousands of Satisfied Customers' Experiences
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold text-green-800">4.8/5 रेटिंग</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
              <span className="font-semibold text-blue-800">10,000+ खुश ग्राहक</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
              <span className="font-semibold text-purple-800">99% सफलता दर</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={testimonialVariants}
              className="relative bg-white rounded-2xl hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4 pt-2">
                <div className="flex gap-1">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-sm text-gray-600">({testimonial.rating}/5)</span>
              </div>

              {/* Review Text */}
              <div className="mb-6">
                <p className="text-gray-800 leading-relaxed mb-3 font-medium">
                  "{testimonial.review}"
                </p>
                <p className="text-gray-600 text-sm italic">
                  "{testimonial.reviewEn}"
                </p>
              </div>

              {/* Customer Info */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.nameEn}</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <span className="font-medium">उम्र: {testimonial.age}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">
                      {testimonial.location} • {testimonial.locationEn}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs">{testimonial.date}</span>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  ✓ सत्यापित
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              आप भी बनें संतुष्ट ग्राहक
            </h3>
            <p className="text-red-100 mb-6 text-lg">
              Join Thousands of Satisfied Customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <span className="text-sm">✅ 30 दिन मनी-बैक गारंटी</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <span className="text-sm">✅ फ्री होम डिलीवरी</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <span className="text-sm">✅ 100% प्राकृतिक</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Trust Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-sm">
            * सभी समीक्षाएं वास्तविक ग्राहकों द्वारा दी गई हैं। परिणाम व्यक्ति के अनुसार अलग हो सकते हैं।
          </p>
          <p className="text-gray-600 text-xs mt-1">
            * All reviews are from real customers. Results may vary from person to person.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;