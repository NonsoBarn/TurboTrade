import bitcoin1 from "../assets/images/bitcoin1.svg";

import { easeIn, motion } from "framer-motion";

const Hero = () => {
  const heroVariants = {
    hidden: {
      y: -15,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: easeIn,
        duration: 2,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="font-oswald bg-white dark:bg-gray-900 py-16"
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-28 lg:py-40 grid-cols-1 md:grid-cols-2">
        <div className="mr-auto place-self-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl  md:text-left">
            Limitless Crypto Exchange
          </h1>
          <p className="md:text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-lg lg:text-xl pb-16">
            Fast, simple non-custodial Exchange service with 10+
            cryptocurrencies. We pay your network fees.
          </p>
        </div>
        <div className=" lg:mt-0  flex lg:w-96">
          <img src={bitcoin1} alt="mockup" />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
