import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function MesiaSignin({ handleChange, handleFacebookChange }) {
  return (
    <div className="mt-10 flex justify-center">
      <button
        onClick={handleChange}
        className="mr-4 flex bg-blue-500 text-white px-6 pl-[2px] py-[2px] rounded-sm font-medium items-center"
      >
        <span className="mr-4 bg-white p-2">
          <FcGoogle />
        </span>
        Login with Google
      </button>
      <button
        onClick={handleFacebookChange}
        className="flex bg-blue-500 text-white px-6 pl-[2px] py-[2px] rounded-sm font-medium items-center"
      >
        <span className="mr-4 bg-white p-2">
          <FaFacebookF className="text-blue-500" />
        </span>
        Login with Facebook
      </button>
    </div>
  );
}

export default MesiaSignin;
