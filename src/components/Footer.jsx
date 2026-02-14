import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaBriefcase,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaBriefcase />, href: "https://shrikantkirdat.carrd.co", label: "Portfolio", target: "_blank" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/shree_shine_studios?igsh=cDBweDJrNzJscGQ5", label: "Instagram", target: "_blank" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shreeshinestudios?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn - ShreeShine", target: "_blank" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/harshad-nikam-3702341a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn - Harshad", target: "_blank" },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-dark-text via-gray-800 to-dark-text text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.img
                src="/logo (1).png"
                alt="ShreeShine Studios"
                className="w-12 h-12 object-contain"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <h3 className="text-2xl font-serif font-bold font-display">
                <span className="text-accent-blue">Shree</span>
                <span className="text-accent-red">Shine</span>
                <span className="text-gold"> Studio</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for all digital solutions. We bring creativity and professionalism to every project.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.target}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-dark-gold transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-serif font-semibold mb-4 text-gold font-display">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Why Us', 'Portfolio', 'Contact'].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5, color: "#D4AF37" }}
                    className="text-gray-300 hover:text-gold transition-all duration-300"
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-serif font-semibold mb-4 text-gold font-display">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Video Editing',
                'Digital Marketing',
                'Social Media',
                'Graphic Design',
                'Web Development'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.a
                    href="#services"
                    whileHover={{ x: 5, color: "#D4AF37" }}
                    className="text-gray-300 hover:text-gold transition-all duration-300"
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-serif font-semibold mb-4 text-gold font-display">Get in Touch</h4>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-gray-300"
              >
                <FaEnvelope className="text-gold mt-1 flex-shrink-0" />
                <span>shreeshinestudio@gmail.com</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-gray-300"
              >
                <FaPhone className="text-gold mt-1 flex-shrink-0 " />
                <span>+91 9209337566</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-gray-300"
              >
                <FaPhone className="text-gold mt-1 flex-shrink-0 " />
                <span>+91 7249092721</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-gray-300"
              >
                <FaMapMarkerAlt className="text-gold mt-1 flex-shrink-0" />
                <span>Kirdat Heights, Satara</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-gray-400 font-display">
            © 2026 <span className="text-gold font-semibold">ShreeShine Studios</span>. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-2"
          >
            
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
             
            </motion.span>
           
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
