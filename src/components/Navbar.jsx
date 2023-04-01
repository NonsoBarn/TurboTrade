import { Link } from "react-scroll";
import { easeInOut, motion } from "framer-motion";
import { UilBars } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";
const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // const triggerNavEffect = () => {
  //   setIsOpen(true);
  // };
  const closeNav = () => {
    setNavVisible(false);
  };

  const openNav = () => {
    setNavVisible(true);
  };

  const navLinkVariants = {
    hidden: {
      y: -25,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -5,
      transition: {
        type: easeInOut,
        duration: 2,
        delay: 1,
      },
    },
  };

  const mobileNavLinkVariants = {
    hidden: {
      y: -25,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -5,
      transition: {
        type: easeInOut,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={navLinkVariants}
      initial="hidden"
      animate="visible"
      className="shadow-md bg-white px-2 sm:px-4 py-2.5 md:py-0  fixed w-full z-20 top-0 left-0 border-b border-gray-200 "
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto ">
        <a
          href="/"
          className={navVisible ? "md:flex hidden" : "flex items-center"}
        >
          <span className="font-anton self-center text-2xl md:text-3xl font-semibold whitespace-nowrap text-emerald-500">
            TurboTrade
          </span>
        </a>
        {/* nav links */}
        <div
          className={
            navVisible
              ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
              : " md:flex hidden"
          }
          id="navbar-sticky"
        >
          <motion.ul
            variants={mobileNavLinkVariants}
            animate="visible"
            className="space-y-6 font-oswald flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-10 md:mt-0 md:text-xl font-bold md:font-medium md:border-0 md:bg-white"
          >
            <button
              onClick={closeNav}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex place-content-end p-2 text-sm text-gray-500 rounded-lg md:hidden  "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <UilTimes size={24} />
            </button>

            <li>
              <Link
                onClick={closeNav}
                to="tradecrypto"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="cursor-pointer block py-2 pb-4 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500 md:active:text-emerald-500 md:p-0"
                aria-current="page"
              >
                <button>Trading Crypto</button>
              </Link>
            </li>
            <li>
              <Link
                onClick={closeNav}
                to="buycrypto"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500 md:p-0 cursor-pointer"
              >
                <button>Buy Crypto</button>
              </Link>
            </li>
            <li>
              <Link
                onClick={closeNav}
                to="giftcard"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500 md:p-0 md:dark:hover:text-white cursor-pointer "
              >
                <button>Buy Gift Cards</button>
              </Link>
            </li>
            <li>
              <Link
                onClick={closeNav}
                to="perks"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500 md:p-0 cursor-pointer "
              >
                <button>Services</button>
              </Link>
            </li>

            <li className="block py-2 pl-6 md:pl-0  pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-500 md:p-0 md:dark:hover:text-white ">
              <Link
                onClick={closeNav}
                to="signup"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                <button
                  type="button"
                  className="text-black bg-emerald-400 hover:bg-emerald-500 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2.5 text-center mr-3 md:mr-0 cursor-pointer"
                >
                  Sign Up
                </button>
              </Link>
            </li>
          </motion.ul>
        </div>
        {/* nav open btn */}
        <button
          onClick={openNav}
          data-collapse-toggle="navbar-sticky"
          type="button"
          className={
            navVisible
              ? "hidden"
              : "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          }
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <UilBars size={24} />
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;
