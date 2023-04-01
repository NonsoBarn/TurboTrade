import bitcoin3 from "../assets/images/bitcoin3.svg";

import { motion } from "framer-motion";

const BuyCrypto = () => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      whileInView={{ x: [-250, 0], opacity: 1 }}
      transition={{ duration: 2 }}
      className="font-oswald bg-white"
      id="buycrypto"
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-32 lg:py-24 lg:px-32 md:grid-cols-2">
        <div className="mr-auto place-self-center lg:pb-0 pb-20">
          <h2 className="text-left max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-white">
            Buy Cryptocurrency <br /> with your Credit or Debit Card
          </h2>
          <p className="text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Enjoy swift and safe cryptocurrencies purchases, using your Credit
            or Debit card.
          </p>
        </div>
        <div className="lg:mt-0  flex pb-6 lg:pl-0 pl-5 ">
          <img className="lg:w-2/3 w-80" src={bitcoin3} alt="mockup" />
        </div>
      </div>
    </motion.div>
  );
};

export default BuyCrypto;
