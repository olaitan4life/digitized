import React from "react";

const Button = ({ text, Object, className, onClick }) => {
  return (
    <div className="">
      <button
        className={`p-2 rounded-2xl border w-[10rem] ${className}`}
        type="button"
        onClick={onClick}
      >
        {text}
        {Object}
      </button>
    </div>
  );
};

export default Button;
