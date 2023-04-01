import bitcoin2 from "../assets/images/bitcoin2.svg";
import { motion } from "framer-motion";
const TradeCrypto = () => {
  return (
    <div className="font-oswald bg-gray-50" id="tradecrypto">
      <div className="grid max-w-full px-4 py-8  mx-auto lg:gap-8 xl:gap-28 lg:py-24 grid-cols-1  md:grid-cols-2 lg:px-32">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 2 }}
          className="lg:mt-0 flex lg:w-96 "
        >
          <img src={bitcoin2} alt="mockup" />
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 2 }}
          className="mr-auto place-self-center lg:pb-0 pb-32 order-first md:order-last "
        >
          <h2 className="text-left max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
            Safest And Fastest Trading
          </h2>
          <p className="text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Process 10 Million transactions per second. <br /> Identical
            security protocols as NASA and Goldmans Sachs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TradeCrypto;
