import React from 'react';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from './ui/aceternity-components';

const Clients = () => {
  const clients = [
    {
      name: 'BBI',
      image: '/Client/bbi.jpg',
      category: 'Business',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      name: 'COC',
      image: '/Client/coc.PNG',
      category: 'Technology',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Nikhil Sangale',
      image: '/Client/Nikhil sangale.PNG',
      category: 'Personal Brand',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Pateshwar',
      image: '/Client/pateshwar .png',
      category: 'Religious',
      gradient: 'from-rose-500 to-red-600'
    },
    {
      name: 'PH',
      image: '/Client/ph.JPG',
      category: 'Healthcare',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'Ron',
      image: '/Client/ron.png',
      category: 'Business',
      gradient: 'from-violet-600 to-purple-700'
    },
    {
      name: 'Sanjeevan',
      image: '/Client/sanjeevan .jpeg',
      category: 'Healthcare',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Saurabh Sir',
      image: '/Client/Saurabh sir.JPG',
      category: 'Personal Brand',
      gradient: 'from-sky-500 to-blue-600'
    },
    {
      name: 'Vishal',
      image: '/Client/vishal.jpg',
      category: 'Personal Brand',
      gradient: 'from-orange-500 to-amber-600'
    },
    {
      name: 'Wascale',
      image: '/Client/wascale.png',
      category: 'Business',
      gradient: 'from-indigo-600 to-blue-700'
    }
  ];

  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-white via-light-gold/20 to-white relative overflow-hidden">
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
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-accent-blue/10 to-gold/10 rounded-full blur-3xl"
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
              Trusted Partners
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-dark-text mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-accent-red to-accent-blue">Clients</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Proud to collaborate with amazing brands and individuals who trust us with their digital presence
          </motion.p>
        </motion.div>
      </div>

      {/* Auto-Scrolling Carousel - Opposite Direction */}
      <div className="w-full relative overflow-hidden bg-gradient-to-b from-light-gold/30 via-gold/5 to-white py-12">
        <motion.div
          className="flex gap-8 pl-8"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate clients array twice for seamless loop */}
          {[...clients, ...clients].map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ duration: 0.4 }}
              className="flex-shrink-0 w-80 group cursor-pointer"
            >
              <HoverBorderGradient
                containerClassName="rounded-3xl"
                className="bg-white rounded-3xl p-1"
              >
                <div className="relative h-96 rounded-2xl bg-gradient-to-br from-white to-gray-50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative h-2/3 overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-20 mix-blend-multiply`}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover object-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Floating Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="absolute top-4 right-4"
                    >
                      <span className={`px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full shadow-lg bg-gradient-to-r ${client.gradient} text-white`}>
                        {client.category}
                      </span>
                    </motion.div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold/30 rounded-tl-2xl" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold/30 rounded-br-2xl" />
                  </div>

                  {/* Content Section with Shine Effect */}
                  <div className="relative h-1/3 p-6 bg-gradient-to-br from-white via-light-gold/10 to-white">
                    {/* Animated Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      animate={{
                        x: [-200, 200],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />

                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <h3 className="text-2xl font-serif font-bold text-dark-text mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-accent-blue transition-all duration-300">
                        {client.name}
                      </h3>
                      
                      {/* Animated Underline */}
                      <motion.div
                        className={`h-1 bg-gradient-to-r ${client.gradient} rounded-full mb-3`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />

                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </motion.div>
                        <p className="text-sm text-gray-600 font-medium">Trusted Client</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                  />
                </div>
              </HoverBorderGradient>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Clients;
