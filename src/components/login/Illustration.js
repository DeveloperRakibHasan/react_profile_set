import React from "react";
import signupimg from "../../assets/image/signup.svg";

function Illustration() {
  return (
    <div>
      <div className="illustration">
        <img
          className="w-full h-[300px] animate-pulse"
          src={signupimg}
          alt=""
        />
      </div>
    </div>
  );
}

export default Illustration;
