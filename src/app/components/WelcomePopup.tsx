// components/Popup.js
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function WelcomePopup({showPopup, setShowPopup}: any) {

  // Trigger popup to show after a slight delay
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Show after 1 second
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem('openPop', JSON.stringify("true"));
    const body = window.document.querySelector('body') as HTMLElement;
    body.style.overflow = 'scroll';
  };

  return (
    <motion.div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 ${showPopup ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg m-5 text-center w-[36rem] relative"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <h2 className="text-2xl font-bold text-[#052E40]">
          Welcome to Influexon
        </h2>
        <h2 className="text-xl font-bold text-[#052E40] mb-4">
         Your Gateway to Authentic Brand-Influencer Partnerships!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Connecting influencers with brands for impactful marketing campaigns. Let us help you find the perfect match!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href='#brands'
            onClick={handleClosePopup}
            className="bg-[#052E40] text-white py-2 px-4 rounded-full hover:bg-[#041e28] transition duration-300"
          >
            Explore Brands
          </a>
          <a
            href='#influencers'
            onClick={handleClosePopup}
            className="bg-[#052E40] text-white py-2 px-4 rounded-full hover:bg-[#041e28] transition duration-300"
          >
            Explore Influencers
          </a>
        </div>
        <div className="mt-4">
          <a
            href='#about'
            onClick={handleClosePopup}
            className="text-[#052E40] underline"
          >
            Learn More
          </a>
        </div>
        <button
          onClick={handleClosePopup}
          className="absolute top-0 right-2 text-xl  text-black hover:text-gray-800"
        >x
        </button>
      </motion.div>
    </motion.div>
  );
};

