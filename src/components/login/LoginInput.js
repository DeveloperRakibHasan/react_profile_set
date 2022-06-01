import React from "react";

function LoginInput(props) {
  return (
    <div className="loginInput">
      <input
        className="w-full bg-white rounded-md border p-2 mb-6"
        {...props}
      />
    </div>
  );
}

export default LoginInput;
