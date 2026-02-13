import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaVideo, 
  FaBullhorn, 
  FaInstagram, 
  FaPalette, 
  FaLaptopCode 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaVideo className="text-5xl" />,
      title: 'Video Editing & Reels',
      shortDesc: 'Professional video content creation',
      description: 'Professional video editing for YouTube, Instagram Reels, and promotional content with cinematic effects.',
      gradient: 'from-gold via-amber-500 to-yellow-600',
      iconBg: 'from-gold to-amber-600',
      features: [
        'YouTube video editing with professional transitions',
        'Instagram Reels & TikTok short-form content',
        'Promotional videos with motion graphics',
        'Color grading and audio enhancement',
        'Cinematic effects and visual storytelling'
      ]
    },
    {
      icon: <FaBullhorn className="text-5xl" />,
      title: 'Digital Marketing',
      shortDesc: '',
      description: 'Complete online marketing solutions to increase reach, leads, and sales',
      gradient: 'from-accent-blue via-blue-600 to-indigo-700',
      iconBg: 'from-accent-blue to-blue-700',
      features: [
        'Google Ads & Facebook Ads campaigns',
        'Email marketing automation',
        'Analytics and performance tracking',
        'Conversion rate optimization'
      ]
    },
    {
      icon: <FaInstagram className="text-5xl" />,
      title: 'Social Media Marketing',
      shortDesc: 'Complete social media management',
      description: 'Account handling, content planning, posting, and audience engagement to build your brand presence.',
      gradient: 'from-accent-red via-rose-600 to-pink-700',
      iconBg: 'from-accent-red to-rose-700',
      features: [
        'Multi-platform account management',
        'Content calendar and scheduling',
        'Community engagement & response',
        'Influencer collaboration strategies',
        'Growth analytics and reporting'
      ]
    },
    {
      icon: <FaPalette className="text-5xl" />,
      title: 'Graphic Design',
      shortDesc: 'Creative visual solutions',
      description: 'Creative designs for social media posts, ads, banners, and complete branding solutions.',
      gradient: 'from-dark-gold via-orange-600 to-amber-700',
      iconBg: 'from-dark-gold to-orange-700',
      features: [
        'Logo design and brand identity',
        'Social media post templates',
        'Marketing banners and flyers',
        'Product packaging design',
        'Print-ready design materials'
      ]
    },
    {
      icon: <FaLaptopCode className="text-5xl" />,
      title: 'Web Development',
      shortDesc: 'Modern responsive websites',
      description: 'Modern, mobile-friendly websites with full support and maintenance. Built for speed and performance.',
      gradient: 'from-slate-700 via-gray-800 to-zinc-900',
      iconBg: 'from-slate-700 to-gray-900',
      features: [
        'Responsive mobile-first design',
        'E-commerce website development',
        'Custom CMS integration',
        'Website maintenance & updates',
        'Performance optimization & SEO'
      ]
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-light-gold/20 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-gold/20 to-accent-blue/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-accent-red/10 to-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-semibold font-display border border-gold/20">
              What We Offer
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-dark-text mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-accent-red to-accent-blue">Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive digital solutions tailored to elevate your brand and accelerate business growth
          </motion.p>
        </motion.div>

        {/* Auto-Scrolling Carousel */}
      </div>
      
      <div className="w-full mb-24 relative overflow-hidden bg-gradient-to-b from-light-gold/30 via-gold/5 to-white py-12">
        <motion.div
          className="flex gap-6 pl-6"
          animate={{
            x: [0, -1680],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
            {/* Duplicate services array twice for seamless loop */}
            {[...services, ...services].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-72 group cursor-pointer"
              >
                <div className={`relative h-52 rounded-2xl bg-gradient-to-br ${service.gradient} overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
                  {/* Large Decorative Shape */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-3xl"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.5) 0%, transparent 50%)",
                      backgroundSize: "200% 200%",
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4 text-white flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl"
                    >
                      <div className="text-3xl">
                        {React.cloneElement(service.icon, { className: 'text-3xl' })}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-xs font-medium">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                  <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/5 rounded-full blur-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Detailed Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side - Gradient with Icon */}
                  <div className={`lg:w-1/3 relative bg-gradient-to-br ${service.gradient} p-12 flex flex-col items-center justify-center text-center overflow-hidden`}>
                    {/* Large Decorative Diamond Shape */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5"
                      style={{
                        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                      }}
                      animate={{
                        rotate: [0, 360],
                        borderRadius: [
                          "30% 70% 70% 30% / 30% 30% 70% 70%",
                          "70% 30% 30% 70% / 70% 70% 30% 30%",
                          "30% 70% 70% 30% / 30% 30% 70% 70%",
                        ],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Background Animation */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                    
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative text-white mb-6"
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="relative text-3xl font-serif font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="relative text-white/90 text-sm font-medium">
                      {service.shortDesc}
                    </p>

                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                  </div>

                  {/* Right Side - Content */}
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-dark-text mb-4 font-display">What We Offer:</h4>
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.iconBg} flex items-center justify-center mt-0.5`}
                          >
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </motion.div>
                          <p className="text-gray-700 group-hover/item:text-dark-text transition-colors">
                            {feature}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gold via-dark-gold to-gold text-white rounded-2xl font-bold font-display text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <span>Get Started Today</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
