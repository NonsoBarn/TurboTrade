import bitcoin4 from "../assets/images/bitcoin4.svg";
import { motion } from "framer-motion";
const GiftCard = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: [-80, 0], opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0, y: -50 }}
      className="font-oswald bg-gray-50"
      id="giftcard"
    >
      <div className="grid max-w-screen-xl px-4 py-8  mx-auto lg:gap-8 xl:gap-32 lg:py-24 md:grid-cols-2 lg:px-32 grid-cols-1">
        <div className=" lg:mt-0   mb-10 md:bg-0 flex ">
          <img src={bitcoin4} alt="mockup" />
        </div>
        <div className=" order-first md:order-last mr-auto place-self-center lg:pb-0 pb-16">
          <h2 className="text-left max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
            Get Gift Cards <br /> with Crypto
          </h2>
          <p className="text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Choose from our selection of gift cards <br /> and pay for them with
            crypto
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GiftCard;
