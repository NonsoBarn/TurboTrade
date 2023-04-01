import { UilUsdCircle } from "@iconscout/react-unicons";
import { UilBill } from "@iconscout/react-unicons";
import { UilTachometerFastAlt } from "@iconscout/react-unicons";
import { UilHeadphones } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
const Perks = () => {
  return (
    <div className="font-oswald bg- lg:py-24" id="perks">
      <motion.h2
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [-100, 0], opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0, y: -50 }}
        className=" mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-white pb-5"
      >
        We Offer All and Alot More..
      </motion.h2>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-100, 0], opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0, y: -50 }}
        className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl px-4 pt-6  mx-auto lg:gap-24 xl:gap-30  lg:grid-cols-4 lg:px-32"
      >
        <span>
          <UilUsdCircle
            size={80}
            className="text-center text-white bg-emerald-400 border p-10 ml-24 lg:ml-0 rounded-full w-40 h-40"
          />
          <p className="text-center max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 lg:ml-5 md:text-lg lg:text-lg mr-9 pt-2">
            Best Rates
          </p>
        </span>
        <span>
          <UilBill
            size={80}
            className="text-center text-white bg-emerald-400 border p-10 ml-24 lg:ml-0 rounded-full w-40 h-40"
          />
          <p className="text-center max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 lg:ml-5 md:text-lg lg:text-lg mr-9 pt-2">
            Transperent Fee
          </p>
        </span>
        <span>
          <UilTachometerFastAlt
            size={80}
            className="text-center text-white bg-emerald-400 border p-10 ml-24 lg:ml-0 rounded-full w-40 h-40"
          />
          <p className="text-center max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 lg:ml-5 md:text-lg lg:text-lg mr-9 pt-2">
            Fast Transaction
          </p>
        </span>
        <span>
          <UilHeadphones
            size={80}
            className="text-center text-white bg-emerald-400 border p-10 ml-24 lg:ml-0 rounded-full w-40 h-40"
          />
          <p className="text-center max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 lg:ml-5 md:text-lg lg:text-lg mr-9 pt-2">
            Wow Support
          </p>
        </span>
      </motion.div>
    </div>
  );
};

export default Perks;
