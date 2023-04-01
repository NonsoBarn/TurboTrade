import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:py-8 dark:bg-gray-900">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ y: [-20, 0], opacity: 1 }}
        transition={{ duration: 2 }}
        className="sm:flex sm:items-center sm:justify-between"
      >
        <a href="https://flowbite.com/" className=" mb-4 flex items-center">
          <span className="font-anton self-center text-2xl md:text-3xl font-semibold whitespace-nowrap text-emerald-500">
            TurboTrade
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <motion.span
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ y: [-20, 0], opacity: 1 }}
        transition={{ duration: 2 }}
        className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >
        ©{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          TurboTrade™
        </a>
        . All Rights Reserved.
      </motion.span>
    </footer>
  );
};

export default Footer;
