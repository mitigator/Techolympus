import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b0b0b] text-[#e7b472]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="mb-4 text-6xl font-bold"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          404
        </motion.h1>
        <motion.p
          className="mb-8 font-mono text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Oops! Page not found.
        </motion.p>
        <Link to='/'>
        <motion.button
          className="px-6 py-3 font-mono bg-[#e7b472] text-[#0f0f19]  font-semibold hover:bg-opacity-80 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            console.log("Navigating to home page");
          }}
        >
          
          Go to Home Page
        </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;