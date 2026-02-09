import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ZAKARIA_PHONE = "212600000000"; // Remplace par ton vrai numéro WhatsApp

const Celebration = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; delay: number; emoji: string }>>([]);
  const [message, setMessage] = useState("");

  const handleSendWhatsApp = () => {
    if (!message.trim()) return;
    const url = `https://wa.me/${ZAKARIA_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const items = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      emoji: ["❤️", "💖", "💗", "💕", "💘", "💝", "🩷", "✨", "🌹", "💐"][i % 10],
    }));
    setConfetti(items);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden valentine-gradient px-6">
      {/* Confetti */}
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-2xl md:text-3xl pointer-events-none select-none"
          style={{ left: item.left, top: "-5%" }}
          initial={{ y: "-10vh", opacity: 1, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [1, 1, 0],
            rotate: 720,
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: item.delay,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.div
          className="text-7xl md:text-9xl mb-6"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💝
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-display text-primary-foreground mb-4 drop-shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Happy Valentine's Day
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-5xl font-display text-primary-foreground/90 mb-6 drop-shadow-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Ma chérie Ouiam 💕
        </motion.h2>

        <motion.div
          className="bg-card/20 backdrop-blur-sm rounded-3xl px-8 py-6 max-w-md mx-auto border border-primary-foreground/20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-lg md:text-xl text-primary-foreground/95 font-body leading-relaxed">
            Tu es tout pour moi. Chaque jour avec toi est une bénédiction.
            Je t'aime de tout mon cœur, aujourd'hui et pour toujours.
          </p>
          <p className="mt-4 text-xl font-display text-primary-foreground">
            Avec tout mon amour, Zakaria ❤️
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {["❤️", "💖", "💗", "💕", "💘"].map((heart, i) => (
            <motion.span
              key={i}
              className="text-3xl md:text-4xl"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {heart}
            </motion.span>
          ))}
        </motion.div>

        {/* Message WhatsApp */}
        <motion.div
          className="mt-10 bg-card/20 backdrop-blur-sm rounded-3xl px-8 py-6 max-w-md mx-auto border border-primary-foreground/20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-lg font-display text-primary-foreground mb-3">
            Laisse-moi un petit message 💌
          </p>
          <textarea
            className="w-full rounded-2xl p-4 text-foreground bg-card/90 border border-valentine-pink/30 focus:outline-none focus:ring-2 focus:ring-valentine-pink resize-none font-body"
            rows={3}
            placeholder="Écris ton message ici..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <motion.button
            className="mt-3 w-full py-3 rounded-2xl valentine-gradient text-primary-foreground font-display text-lg shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSendWhatsApp}
          >
            Envoyer sur WhatsApp 💬
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Celebration;
