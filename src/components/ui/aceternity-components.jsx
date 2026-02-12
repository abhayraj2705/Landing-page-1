import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const SparklesCore = ({ className, particleColor = "#FFF" }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: particleColor,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export const BackgroundGradientAnimation = ({ children, className }) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #C41E3A 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, #1E3A8A 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {children}
    </div>
  );
};

export const TextGenerateEffect = ({ words, className }) => {
  const wordsArray = words.split(" ");
  return (
    <div className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: idx * 0.1,
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-white border border-gold/20 justify-between flex flex-col space-y-4 hover:border-gold/50",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-serif font-bold text-dark-text mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans text-gray-text text-sm">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export const HoverBorderGradient = ({ children, className, containerClassName }) => {
  return (
    <div className={cn("relative group", containerClassName)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold via-accent-red to-accent-blue rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className={cn("relative", className)}>
        {children}
      </div>
    </div>
  );
};
