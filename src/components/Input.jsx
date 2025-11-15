import React from "react";

const Input = ({ onChange, value }) => {
  return (
    <input
      className="w-96 rounded-sm px-3 py-2 focus:border-blue-800 border-blue-800 border-2 outline-none"
      type="text"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
