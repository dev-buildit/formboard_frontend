import React from "react";
import whiteLogo from "../assets/logo-full-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
const LoginPage = () => {
  return (
    <div className="min-h-screen bg-themeBlue ">
      <div className="p-8">
        <img
          src={whiteLogo}
          alt="Formboard Logo"
          className="h-12 w-auto mr-3"
        />
      </div>

      <div className="flex flex-col justify-center items-center text-white ">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl mb-4">Welcome Back, Login to continue</h2>
        </div>

        {/* Login Form */}
        <div className="bg-white text-black shadow-md p-8 w-1/3">
          <form>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="w-full border rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-200"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                className="w-full rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-neutral-200"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-buttonColor text-white py-2 hover:bg-blue-700"
            >
              Login
            </button>
          </form>

          {/* OR Separator */}
          <div className="flex items-center my-3">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button className="flex items-center justify-center w-full max-w-sm px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-2">
            <FontAwesomeIcon
              icon={faGoogle}
              className="mr-3 text-lg text-blue-800"
            />
            Continue with Google
          </button>
          <button className="flex items-center justify-center w-full max-w-sm px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FontAwesomeIcon
              icon={faGithub}
              className="mr-3 text-lg text-blue-800"
            />
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
