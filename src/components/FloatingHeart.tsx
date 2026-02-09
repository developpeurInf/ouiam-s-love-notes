import { motion } from "framer-motion";

interface FloatingHeartProps {
  emoji: string;
  index: number;
  onClick: () => void;
  disabled: boolean;
  delay: number;
}

const FloatingHeart = ({ emoji, index, onClick, disabled, delay }: FloatingHeartProps) => {
  return (
    <motion.button
      className={`text-5xl md:text-6xl cursor-pointer select-none transition-all rounded-2xl p-3 md:p-4 ${
        disabled
          ? "opacity-30 scale-75 grayscale pointer-events-none"
          : "hover:scale-125 active:scale-90"
      }`}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{
        opacity: 1,
        scale: disabled ? 0.75 : 1,
        rotate: 0,
        y: disabled ? 0 : [0, -8, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, type: "spring", stiffness: 200 },
        rotate: { delay, duration: 0.6 },
        y: {
          delay: delay + 0.5,
          duration: 2 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={!disabled ? { scale: 1.3, rotate: [0, -10, 10, 0] } : {}}
      whileTap={!disabled ? { scale: 0.8 } : {}}
      onClick={onClick}
      disabled={disabled}
      aria-label={`Cœur ${index + 1}`}
    >
      {disabled ? "✅" : emoji}
    </motion.button>
  );
};

export default FloatingHeart;
