import React from "react";

function SignupButton({ children }) {
  return (
    <button className="w-full cursor-pointer px-4 py-2 rounded-md mt-6 bg-green-400 text-center">
      <span>{children}</span>
    </button>
  );
}

export default SignupButton;
