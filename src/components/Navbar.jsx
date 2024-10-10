import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import christ from '../assets/navchrist.webp';
import Gatewayslogo from '../assets/Gatewayslogo.png';
import Techolympys from '../assets/Techolympuslogoblack.svg';
import { Link } from 'react-router-dom';
import test from '../assets/about.svg';

const Navbar = (activePage) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        controls.start({ y: '-100%', transition: { duration: 0.3 } });
      } else {
        // Scrolling up or stopped
        controls.start({ y: 0, transition: { duration: 0.3 } });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, controls]);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50 "
      initial={{ y: 0 }}
      animate={controls}
    >
      <nav className="bg-[#05051887]  border-[#E7B472] text-[#E7B472] font-abril-fatface  md:p-1 pl-5 md:pl-0 flex justify-between items-center py-3">
        <div className="z-10 items-center hidden gap-5 pl-2 space-x-2 md:py-1 md:flex">
         
          <div className="w-11 h-11 m-2 p-[1px] rounded-full hover:bg-[#e7b472] bg-[#e7b472d2] border border-[#e7b472]  flex justify-center items-center">
            <Link to='/'>
              <img src={Techolympys} alt="Techolympys Logo" />
            </Link>
          </div>
        </div>

        <div className="flex items-center ">
          {!isMenuOpen && (
            <button
              className="z-50 block md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <motion.div
                initial={false}
                animate={isMenuOpen ? 'open' : 'closed'}
                className="space-y-1"
              >
                <motion.div
                  className="w-6 h-0.5 bg-[#E7B472]"
                  variants={{
                    open: { rotate: 45, y: 6 },
                    closed: { rotate: 0, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-[#E7B472]"
                  variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="w-6 h-0.5 bg-[#E7B472]"
                  variants={{
                    open: { rotate: -45, y: -6 },
                    closed: { rotate: 0, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </button>
          )}

          <div className="z-50 justify-center hidden gap-24 space-x-6 md:flex font-abril-fatface">
            <a className={`hover:underline underline-offset-4 ${activePage==="events"?"underline":""}`} href="/events">Events</a>
            <a className={`hover:underline underline-offset-4 ${activePage==="about"?"underline":""}`} href="/about">About</a>
            {/* <a className={`hover:underline underline-offset-4`} href={test} download="Brochure.pdf">Brochure</a> */}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex items-center"
        >
          <a to='https://christuniversity.in/' target='_blank'>
            <img src={christ} alt="Christ University logo" className="w-auto h-10 md:h-14" />
          </a>
        </motion.div>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute font-abril-fatface top-full text-4xl left-0 w-full h-[100vh] bg-[#0f0f19] p-4 md:hidden z-50"
        >
          <a href="/" className={`block py-2 text-center m-14 text-[#E7B472]`}>Home</a>
          <a href="/events" className={`block py-2 text-center m-14 text-[#E7B472]  ${activePage==="events"?"underline underline-offset-4":""}`}>Events</a>
          <a href="/about" className={`block py-2 text-center m-14 text-[#E7B472]  ${activePage==="events"?"underline underline-offset-4":""}`}>About</a>
          {/* <a
            href={test}
            download="Brochure.pdf"
            className="block py-2 text-center m-14 text-[#E7B472]"
          >
            Brochure
          </a> */}

          <div className="flex justify-center mt-12">
            <button
              className="text-[#E7B472] text-4xl focus:outline-none"
              onClick={toggleMenu}
            >
              &#10005;
            </button>
          </div>
        </motion.div>
      )}

    </motion.div>
  );
};

export default Navbar;