import React from "react";

function Form({ children, ...rest }) {
  return (
    <form className="" action="#" {...rest}>
      {children}
    </form>
  );
}

export default Form;
