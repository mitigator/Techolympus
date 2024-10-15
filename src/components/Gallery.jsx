import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar'
import Footer from './Footer';
import image1 from '../assets/Gallery/eve_1.jpg';
import image2 from '../assets/Gallery/eve_2.jpg';
import image3 from '../assets/Gallery/evg_1.jpg';
import image4 from '../assets/Gallery/evg_2.jpg';
import image5 from '../assets/Gallery/evg_3.jpg';
import image6 from '../assets/Gallery/evg_4.jpg';
import image7 from '../assets/Gallery/evg_5.jpg';
import image8 from '../assets/Gallery/fm_1.jpg';
import image9 from '../assets/Gallery/fm_2.jpg';
import image10 from '../assets/Gallery/fmg_1.jpg';
import image11 from '../assets/Gallery/hr_2.jpg';
import image12 from '../assets/Gallery/hr_3.jpg';
import image13 from '../assets/Gallery/in_g1.jpg';
import image14 from '../assets/Gallery/in_g2.jpg';
import image15 from '../assets/Gallery/in_g3.jpg';
import image16 from '../assets/Gallery/in_g4.jpg';
import image17 from '../assets/Gallery/in_g5.jpg';
import image18 from '../assets/Gallery/ing_1.jpg';
import image19 from '../assets/Gallery/ing_2.jpg';
import image20 from '../assets/Gallery/va_1.jpg';
import image21 from '../assets/Gallery/va_2.jpg';
import image22 from '../assets/Gallery/vag_1.jpg';
import image23 from '../assets/Gallery/vag_2.jpg';
import image24 from '../assets/Gallery/vag_3.jpg';
import image25 from '../assets/Gallery/vag_4.jpg';
import image26 from '../assets/Gallery/vag_5.jpg';
import image27 from '../assets/Gallery/vag_6.jpg';
import image28 from '../assets/Gallery/vag_7.jpg';
import image29 from '../assets/Gallery/vag_8.jpg';
import image30 from '../assets/Gallery/vag_9.jpg';

gsap.registerPlugin(ScrollTrigger);

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19,
  image20, image21, image22, image23, image24, image25, image26, image27, image28, 
  image29, image30
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const gridRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gridRef.current.children, 
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotate: -10,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 90%',
          end: 'bottom 1%',
          scrub: true,
        },
      }
    );
  }, []);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    gsap.fromTo(
      '.modal',
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power3.out',
      }
    );
  };

  const closeModal = () => {
    gsap.to('.modal', {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: 'power3.in',
      onComplete: () => setSelectedImageIndex(null),
    });
  };

  const nextImage = () => {
    gsap.to(imageRef.current, {
      opacity: 0,
      x: 100, 
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: -100 }, 
          { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }
        );
      },
    });
  };

  const prevImage = () => {
    gsap.to(imageRef.current, {
      opacity: 0,
      x: -100, 
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: 100 }, 
          { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }
        );
      },
    });
  };

  return (
    <div className='bg-[#0F0F19]'>
      <Navbar/>
      <p className='text-[#E7B472] text-center text-4xl pt-16 pb-6 font-abril-fatface'>Gateways 2023</p>
      
    <div className="container mx-auto p-10">
      {/* Image Grid with Framer Motion */}
      <motion.div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer overflow-hidden"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(index)}>
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <motion.div
              className="absolute inset-0 bg-[#E7B472] bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex justify-center items-center text-white"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}>
              <span className="text-3xl text-[#000000] font-bold font-bilbo-swap-caps">View</span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal with Image Slider */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={closeModal}>
            <motion.div
              className="modal relative max-w-3xl mx-auto p-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}>
              <img
                ref={imageRef}
                src={images[selectedImageIndex]}
                alt="Selected"
                className="rounded-lg shadow-lg"
              />
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full"
                onClick={closeModal}>
                &times;
              </button>

              {/* Image Slider Controls */}
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
                onClick={prevImage}>
                &#10094;
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
                onClick={nextImage}>
                &#10095;
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
    <Footer/>
    </div>
  );
};

export default Gallery;
