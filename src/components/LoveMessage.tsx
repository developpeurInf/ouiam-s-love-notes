import { motion } from "framer-motion";

interface LoveMessageProps {
  message: string;
}

const LoveMessage = ({ message }: LoveMessageProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-card/95 backdrop-blur-md border border-valentine-pink rounded-3xl px-8 py-6 shadow-2xl max-w-sm text-center"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, y: -50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <p className="text-xl md:text-2xl font-display text-foreground leading-relaxed">
          {message}
        </p>
        <p className="mt-2 text-sm text-muted-foreground font-body">— Zakaria 💌</p>
      </motion.div>
    </motion.div>
  );
};

export default LoveMessage;
