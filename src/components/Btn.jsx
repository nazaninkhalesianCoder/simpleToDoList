import React from "react";

const Btn = ({ onClick }) => {
  return (
    <button
      className="bg-blue-800 text-white font-bold px-3 py-2 text-md rounded-sm"
      onClick={onClick}
    >
      Add task
    </button>
  );
};

export default Btn;
