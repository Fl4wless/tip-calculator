import React from "react";
import "./Button.css";

const Button = (props) => {
  const handlePercent = (e) => {
    props.setPercent(e.target.value);
  };

  return (
    <button
      className={`button ${props.className}`}
      value={props.value}
      onClick={handlePercent}
    >
      {props.children}
    </button>
  );
};

export default Button;
