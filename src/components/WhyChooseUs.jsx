import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaStar, 
  FaRocket, 
  FaDollarSign, 
  FaCheckCircle, 
  FaHandshake 
} from 'react-icons/fa';
import { HoverBorderGradient } from './ui/aceternity-components';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaStar className="text-4xl" />,
      title: 'Creative & Professional Work',
      description: 'High-quality designs and content that stand out and make an impact',
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality',
    },
    {
      icon: <FaDollarSign className="text-4xl" />,
      title: 'Affordable Packages',
      description: 'Competitive pricing plans that fit your budget',
    },
    {
      icon: <FaCheckCircle className="text-4xl" />,
      title: 'One-Stop Digital Solution',
      description: 'All your digital needs covered under one roof',
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: 'Personal Support',
      description: 'Dedicated support team always ready to assist you',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-light-gold via-white to-light-gold relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 border-4 border-gold rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-60 h-60 border-4 border-gold rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-serif font-bold text-dark-text mb-4"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-dark-gold to-gold">Us?</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-gold via-dark-gold to-gold mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-text max-w-2xl mx-auto font-display"
          >
            We combine creativity, expertise, and dedication to deliver exceptional results
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HoverBorderGradient containerClassName="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl h-full"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-gold to-dark-gold rounded-xl flex items-center justify-center text-white mb-6 shadow-lg"
                  >
                    {reason.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-semibold text-dark-text mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              </HoverBorderGradient>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gold/20"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  bounce: 0.5
                }}
                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-dark-gold mb-2 font-display"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-text font-medium font-display">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
