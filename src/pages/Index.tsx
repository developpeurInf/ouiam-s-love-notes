import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHeart from "@/components/FloatingHeart";
import LoveMessage from "@/components/LoveMessage";
import Celebration from "@/components/Celebration";
import WelcomeScreen from "@/components/WelcomeScreen";

const loveMessages = [
  "Tu es la plus belle chose qui me soit arrivée 💕",
  "Mon cœur bat plus fort chaque jour pour toi 💓",
  "Ouiam, tu illumines ma vie ✨",
  "Je t'aime plus que tous les mots du monde 💖",
  "Tu es mon étoile dans la nuit 🌟",
  "Chaque moment avec toi est un cadeau 🎁",
  "Tu es ma raison de sourire 😊",
  "Mon amour pour toi est infini ♾️",
  "Tu rends ma vie magique 🪄",
  "Je suis le plus chanceux grâce à toi 🍀",
];

const heartEmojis = ["❤️", "💖", "💗", "💓", "💕", "💘", "💝", "💞", "🩷", "❣️"];

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [clickedCount, setClickedCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const totalHearts = loveMessages.length;

  const handleHeartClick = (index: number) => {
    if (clickedCount >= totalHearts) return;

    const newCount = clickedCount + 1;
    setClickedCount(newCount);
    setCurrentMessage(loveMessages[index]);
    setShowMessage(true);

    setTimeout(() => setShowMessage(false), 2500);

    if (newCount >= totalHearts) {
      setTimeout(() => setGameFinished(true), 3000);
    }
  };

  if (gameFinished) {
    return <Celebration />;
  }

  if (!gameStarted) {
    return <WelcomeScreen onStart={() => setGameStarted(true)} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-valentine-blush">
      {/* Background floating hearts */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`bg-${i}`}
          className="absolute text-2xl opacity-20 pointer-events-none select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          💕
        </motion.div>
      ))}

      {/* Header */}
      <div className="relative z-10 text-center pt-8 pb-4 px-4">
        <motion.h1
          className="text-3xl md:text-5xl font-display valentine-text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Clique sur les cœurs, Ouiam ! 💕
        </motion.h1>
        <motion.p
          className="mt-3 text-muted-foreground font-body text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {clickedCount} / {totalHearts} cœurs trouvés
        </motion.p>

        {/* Progress bar */}
        <div className="mx-auto mt-4 max-w-xs h-3 rounded-full bg-secondary overflow-hidden">
          <motion.div
            className="h-full rounded-full valentine-gradient"
            animate={{ width: `${(clickedCount / totalHearts) * 100}%` }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>
      </div>

      {/* Hearts grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 md:gap-6 px-6 py-8 max-w-2xl mx-auto">
        {heartEmojis.map((emoji, i) => (
          <FloatingHeart
            key={i}
            emoji={emoji}
            index={i}
            onClick={() => handleHeartClick(i)}
            disabled={clickedCount > i}
            delay={i * 0.1}
          />
        ))}
      </div>

      {/* Love message popup */}
      <AnimatePresence>
        {showMessage && <LoveMessage message={currentMessage} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
