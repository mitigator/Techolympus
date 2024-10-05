import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f0f19] text-[#e7b472]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Oops! Page not found.
        </motion.p>
        <Link to='/'>
        <motion.button
          className="px-6 py-3 bg-[#e7b472] text-[#0f0f19] rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300"
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