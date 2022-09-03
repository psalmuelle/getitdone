import React from "react";
import { motion } from "framer-motion";



export const AnimatedTextWord = ({ text }) => {
    const words = text.split(" ");
  
  // Variants for Container of words.
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
      }),
    };
  
  // Variants for each word.
  
    const child = {
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: {
        opacity: 0,
        x: 20,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    };
  
    return (
      <motion.div
      className="flex flex-wrap justify-center items-center gap-5 p-4  mt-10 lg:mt-0"
        variants={container}
        initial="hidden"
        animate="visible"
        
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-xl text-slate-50"
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };
  
  



export const AnimatedTextCharacter = ({ text }) => {
// splitting text into letters
  const letters = Array.from(text);

// Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

// Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
     className=""
      variants={container}
      initial="hidden"
      animate="visible"
      
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

