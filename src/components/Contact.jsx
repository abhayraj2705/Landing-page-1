import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email Us',
      details: 'shreeshinestudio@gmail.com',
      link: 'mailto:shreeshinestudio@gmail.com',
      gradient: 'from-gold to-amber-600'
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Call Us',
      details: '+91 9209337566',
      subtitle: '+91 7249092721',
      link: 'tel:+919209337566',
      gradient: 'from-accent-blue to-blue-700'
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Visit Us',
      details: 'Kirdat Heights, Satara',
      gradient: 'from-accent-red to-rose-700'
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white via-light-gold/20 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-gold/20 to-accent-red/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-accent-blue/10 to-gold/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
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
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-dark-text mb-6"
          >
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-accent-red to-accent-blue">Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to elevate your brand? Let's discuss how we can help you achieve your goals
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <a
                href={info.link}
                className="block relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 p-8"
              >
                {/* Decorative Background Shape */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${info.gradient} opacity-10 rounded-full blur-2xl`}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:shadow-xl transition-shadow`}
                >
                  {info.icon}
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-dark-text mb-2 font-display">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 font-medium mb-1">
                    {info.details}
                  </p>
                  {info.subtitle && (
                    <p className="text-gray-600 text-sm">
                      {info.subtitle}
                    </p>
                  )}
                </div>

                {/* Arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
