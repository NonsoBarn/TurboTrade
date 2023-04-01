import { useState } from "react";
import { motion } from "framer-motion";
import bitcoin5 from "../assets/images/bitcoin5.svg";
const Signup = () => {
  const [hasAccount, setHasAccount] = useState(false);

  const signuptable = () => {
    setHasAccount(false);
  };

  const signintable = () => {
    setHasAccount(true);
  };
  const CreateAccount = () => {
    return (
      <div className="w-full  bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-1xl dark:text-white">
            Sign Up to Create your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="username"
                className="text-left block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="username"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-left block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-left block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            <div className="flex">
              <button
                type="submit"
                className="text-black bg-emerald-400 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 w-full"
              >
                Sign Up
              </button>
            </div>

            <p className="text-left text-sm font-light text-gray-500 dark:text-gray-400">
              Already got an Account?{" "}
              <span
                onClick={signintable}
                className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Log in
              </span>
            </p>
          </form>
        </div>
      </div>
    );
  };

  const SignInAccount = () => {
    return (
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-1xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="text-left block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-left block mb-0.5 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <div className="flex">
              <button
                type="submit"
                className="text-black bg-emerald-400 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2 text-center mr-3 md:mr-0"
              >
                Sign In
              </button>
            </div>

            <p className="text-left text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <span
                onClick={signuptable}
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    );
  };
  return (
    <section className="bg-emerald-50 font-oswald" id="signup">
      <div className="grid max-w-screen-xl lg:px-28 px-20 py-8 mx-auto lg:gap-14 xl:gap-32 lg:pt-32 lg:pb-24 grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-100, 0], opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {hasAccount ? <SignInAccount /> : <CreateAccount />}
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [100, 0], opacity: 1 }}
          transition={{ duration: 2 }}
          className=" lg:mt-0  md:flex pb-6  lg:pt-0 pt-14 hidden "
        >
          <img className="w-80" src={bitcoin5} alt="mockup" />
        </motion.div>
      </div>
    </section>
  );
};

export default Signup;
