import { motion } from "framer-motion";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-valentine-blush px-6">
      {/* Floating background hearts */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl opacity-15 pointer-events-none select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {["❤️", "💕", "💗", "💖", "🩷"][i % 5]}
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-7xl md:text-8xl mb-6"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💝
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-display valentine-text-gradient mb-4">
          Pour toi, Ouiam
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body mb-2">
          Un petit jeu d'amour de la part de
        </p>
        <p className="text-2xl md:text-3xl font-display text-valentine-deep mb-10">
          Zakaria 💌
        </p>

        <motion.button
          className="valentine-gradient text-primary-foreground font-body font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
        >
          Commencer le jeu 💕
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
