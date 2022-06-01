import React from "react";

function TextInput(props) {
  return (
    <div className="textInput">
      <input
        className="w-full bg-white rounded-md border p-2 mb-6"
        {...props}
      />
      <span></span>
    </div>
  );
}

export default TextInput;
