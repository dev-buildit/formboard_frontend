import {
  faCode,
  faMailBulk,
  faMailForward,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import mainLogo from "../assets/logo-full-1.png";
import { faGit, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignUpForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white overflow-y-auto">
      <div className="bg-white w-full flex flex-col md:flex-row overflow-hidden m-4 md:mx-20">
        {/* Left Section: Form */}
        <div className="w-full md:w-8/12 p-8">
          <img
            src={mainLogo} // Replace with your logo's path
            alt="Formboard Logo"
            className="h-12 w-auto mr-3 mb-4" // Adjust size as needed
          />
          <h1 className="text-lg text-slate-400 font-bold my-4 text-start md:text-left">
            Welcome, Please sign up to continue
          </h1>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="firstName"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full md:w-2/3 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                  placeholder="First name"
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="lastName"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full md:w-2/3 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full md:w-5/6 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                placeholder="Email"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full md:w-5/6 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-100"
                placeholder="Password"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm">
                I understand and agree to the
                <a href="#" className="text-indigo-800 ml-1 font-bold">
                  terms of use
                </a>
                and
                <a href="#" className="text-indigo-800 ml-1 font-bold">
                  privacy policy
                </a>
              </label>
            </div>

            <button className="bg-neutral-300 hover:bg-blue-700 text-slate-500 font-bold py-2 px-4 rounded w-full md:w-auto">
              Submit
            </button>
          </form>
          <div className="flex flex-col items-start space-y-4 w-10/12 mt-3">
            <div className="flex items-center w-full">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <button className="flex items-center justify-center w-full max-w-sm px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <FontAwesomeIcon icon={faGoogle} className="mr-3 text-lg" />
              Continue with Google
            </button>
            <button className="flex items-center justify-center w-full max-w-sm px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <FontAwesomeIcon icon={faGithub} className="mr-3 text-lg" />
              Continue with GitHub
            </button>
          </div>

          <p className="text-sm mt-4 text-start md:text-left">
            Already have an account?{" "}
            <a href="#" className="text-indigo-800 font-bold">
              Login
            </a>
          </p>
        </div>

        {/* Right Section: Features */}
        <div className="w-full md:w-4/12 bg-themeBlue text-white px-8 py-16 rounded-lg h-[90vh]">
          <div className="space-y-6 h-full flex flex-col justify-around">
            <div className="flex items-start gap-4">
              <span>
                <FontAwesomeIcon icon={faPaperPlane} className="mr-3" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-start md:text-left">
                  All your submissions in one place
                </h2>
                <p className="text-sm text-start md:text-left">
                  No more hunting through emails. You can search, sort and
                  filter your form submissions in your Formboard dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span>
                <FontAwesomeIcon icon={faMailBulk} className="mr-3" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-start md:text-left">
                  Email forwarding
                </h2>
                <p className="text-sm text-start md:text-left">
                  Provides an option for form submissions to be forwarded to a
                  specified email address.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span>
                <FontAwesomeIcon icon={faCode} className="mr-3" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-start md:text-left">
                  No backend required
                </h2>
                <p className="text-sm text-start md:text-left">
                  Easily collect data without worrying about server-side setup.
                  Formboard allows you to focus on building your form while it
                  handles the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
