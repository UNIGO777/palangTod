import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Leaf, Star, Shield, Clock, Award } from 'lucide-react'
import ProductImage from '../assets/ProductImage.png'

const AboutTheProduct = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Benefits array remains unchanged
  const benefits = [
    "Increases energy and stamina",
    "Eliminates physical weakness", 
    "Reduces mental stress",
    "Maintains natural hormone balance",
    "Improves sexual performance and desire",
    "Enhances sperm quality and count",
    "Boosts testosterone levels naturally",
    "Strengthens immune system"
  ]

  // Key ingredients array remains unchanged
  const keyIngredients = [
    {
      name: "Ashwagandha",
      description: "Known as KING OF HERBS - enhances strength, energy, and vitality. Potent stress reliever with anti-aging properties.",
      icon: "🌿"
    },
    {
      name: "Shilajit", 
      description: "Strong anti-inflammatory and antioxidant properties. Enhances longevity and promotes male fertility.",
      icon: "⛰️"
    },
    {
      name: "Safed Musli",
      description: "Improves sperm quality, increases testosterone levels, and enhances blood flow for better performance.",
      icon: "🌱"
    },
    {
      name: "Gokshura",
      description: "Improves sexual desire, increases testosterone as bio-stimulator, strengthens penile tissue.",
      icon: "🌾"
    },
    {
      name: "Kaunch Beej",
      description: "Increases sexual desire and improves quality & quantity of sperm due to aphrodisiac properties.",
      icon: "🫘"
    },
    {
      name: "Shatavar",
      description: "Supports reproductive function, hormonal balance, relieves stress and promotes healthy energy levels.",
      icon: "🌿"
    }
  ]

  const features = [
    { icon: <Leaf className="w-6 h-6" />, title: "100% Natural", desc: "Ayurvedic Formula" },
    { icon: <Shield className="w-6 h-6" />, title: "No Side Effects", desc: "Safe & Herbal" },
    { icon: <Award className="w-6 h-6" />, title: "GMP Certified", desc: "Quality Assured" },
    { icon: <Clock className="w-6 h-6" />, title: "Proven Results", desc: "3+ Months Usage" }
  ]

  return (
    <section className="py-8 relative sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 mx-auto max-w-7xl">
      <img src="https://img.freepik.com/free-photo/close-up-couple-having-intimacy-moments_23-2149169149.jpg?semt=ais_hybrid&w=740" alt="" className="w-full mb-10 md:hidden" />
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            About <span className="text-red-600">Neelkanth Palangtod</span> Capsules
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Eat it once and you will get more strength than a horse
          </p>
          <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base">
            <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold">Ayurvedic Solution for Strength & Energy</span>
          </div>
        </motion.div>

        {/* Side Images */}
        <div className='absolute top-10 right-0 w-[15vw] hidden lg:block'>
          <img src="https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/321428_2200-800x1200.jpg" alt="" className="w-full mb-2" />
          <img src="https://img.freepik.com/free-photo/close-up-couple-having-intimacy-moments_23-2149169149.jpg?semt=ais_hybrid&w=740" alt="" className="w-full mb-2" />
          <img src="https://img.freepik.com/free-photo/beautiful-intimacy-moment-couple_23-2149165264.jpg?semt=ais_hybrid&w=740&q=80" alt="" className="w-full mb-2" />
          <img src="https://thumbs.dreamstime.com/b/top-view-lovers-having-sex-man-kissing-woman-top-view-passion-lovers-having-sex-men-kissing-woman-133821711.jpg" alt="" className="w-full mb-2" />
          <img src="https://thumbs.dreamstime.com/b/couple-shares-tender-embrace-indoors-radiating-warmth-love-connection-room-has-bright-inviting-ambiance-image-356189482.jpg" alt="" className="w-full mb-2" />
          <img src="https://as1.ftcdn.net/jpg/01/29/27/50/1000_F_129275012_nV91T7VwZU67VL0WzycSYvY8AKJqXprA.jpg" alt="" className="w-full" />
        </div>
        <div className='absolute top-10 left-0 w-[15vw] hidden lg:block'>
          <img src="https://us.123rf.com/450wm/lightfieldstudios/lightfieldstudios2002/lightfieldstudios200212757/140493967-side-view-of-boyfriend-kissing-attractive-girlfriend-with-closed-eyes.jpg?ver=6" alt="" className="w-full mb-2" />
          <img src="https://thumbs.dreamstime.com/b/beutiful-sexual-couple-love-12898426.jpg" alt="" className="w-full mb-2" />
          <img src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-11/dainis-graveris-spx5guvmd6m-unsplash.jpg?itok=o8AQYLpU" alt="" className="w-full mb-2" />
          <img src="https://st3.depositphotos.com/16122460/19027/i/450/depositphotos_190274820-stock-photo-sexy-young-couple-being-intimate.jpg" alt="" className="w-full mb-2" />
          <img src="https://st5.depositphotos.com/1008450/67901/i/450/depositphotos_679015176-stock-photo-beautiful-couple-smiling-hugging-while.jpg" alt="" className="w-full mb-2" />
          <img src="https://img.freepik.com/free-photo/couple-love-waking-up-together_329181-13845.jpg?w=360" alt="" className="w-full" />
        </div>

        {/* Rest of the component remains unchanged */}
        {/* Main Description */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 md:mb-16"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                🌿 100% Ayurvedic Herbal Supplement
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Neelkanth Palangtod Capsules is a premium ayurvedic herbal supplement specially formulated 
                to enhance men's energy, strength, stamina, and mental health. Enriched with powerful herbs 
                in a 100% natural ayurvedic formula.
              </p>
              
              {/* Dosage */}
              <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 rounded">
                <h4 className="font-semibold text-red-800 mb-1 sm:mb-2 text-sm sm:text-base">💊 Dosage Instructions:</h4>
                <p className="text-red-700 text-sm sm:text-base">
                  Take 1-2 capsules daily with milk or water (after meals). 
                  For best results, continue for at least 3 months.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-2 sm:gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-red-50 to-red-100 p-3 sm:p-4 rounded-lg sm:rounded-xl text-center"
                >
                  <div className="text-red-600 mb-1.5 sm:mb-2 flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">{feature.title}</h4>
                  <p className="text-gray-600 text-xs">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <img src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-11/dainis-graveris-spx5guvmd6m-unsplash.jpg?itok=o8AQYLpU" alt="" className="w-full md:hidden mb-10" />

        {/* Benefits Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-8 sm:mb-12 md:mb-16 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10"
        >
          {/* Left: Benefits */}
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-left text-gray-900 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center justify-center bg-green-100 rounded-full p-1.5 sm:p-2">
                <CheckCircle className="w-5 h-5 sm:w-7 sm:h-7 text-green-600" />
              </span>
              Key Benefits
            </h3>
            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="inline-flex items-center justify-center bg-green-100 rounded-full p-1 mt-0.5">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </span>
                    <span className="text-gray-800 text-sm sm:text-base font-medium group-hover:text-green-700 transition-colors duration-200">{benefit}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="16" fill="#22C55E" fillOpacity="0.15"/></svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Right: Product Image */}
          <div className="w-full lg:w-1/3 flex justify-center items-center mt-6 sm:mt-8 lg:mt-10">
            <div className="relative">
              <img
                src={ProductImage}
                alt="Neelkanth Palangtod Capsules"
                className="relative z-10 max-w-[200px] sm:max-w-xs mx-auto"
              />
            </div>
          </div>
        </motion.div>


        {/* Key Ingredients */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            🌱 Key Herbal Ingredients
          </h3>
          <p className="text-center text-gray-600 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base">
            Powerful combination of traditional Ayurvedic herbs
          </p>
          
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {keyIngredients.map((ingredient, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{ingredient.icon}</div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">{ingredient.name}</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{ingredient.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <img src="https://us.123rf.com/450wm/lightfieldstudios/lightfieldstudios2002/lightfieldstudios200212757/140493967-side-view-of-boyfriend-kissing-attractive-girlfriend-with-closed-eyes.jpg?ver=6" alt="" className="w-full mb-10 md:hidden" />


        {/* Additional Ingredients */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">And Many More Powerful Herbs!</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span className="bg-white bg-opacity-20 px-2 sm:px-3 py-1 rounded-full">Salam Panja Musli</span>
            <span className="bg-white bg-opacity-20 px-2 sm:px-3 py-1 rounded-full">Vidarikanda</span>
            <span className="bg-white bg-opacity-20 px-2 sm:px-3 py-1 rounded-full">Bhainsatad Jad</span>
          </div>
          <p className="mt-3 sm:mt-4 opacity-90 text-sm sm:text-base">
            Each ingredient is carefully selected and processed to ensure maximum potency and effectiveness
          </p>
        </motion.div>

        {/* Safety Notice */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-8 sm:mt-12 md:mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6"
        >
          <h4 className="font-semibold text-yellow-800 mb-1.5 sm:mb-2 text-sm sm:text-base">⚠️ Important Safety Information:</h4>
          <ul className="text-yellow-700 text-xs sm:text-sm space-y-0.5 sm:space-y-1">
            <li>• For men 18 years and above only</li>
            <li>• Consult a doctor if you have serious medical conditions or are taking other medications</li>
            <li>• This is an Ayurvedic supplement, not an allopathic medicine</li>
            <li>• Individual results may vary - consistent use recommended for best results</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutTheProduct
