import React from 'react';
import "./loader.css";
const Loader = () => {
  return (
    <div className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
      <div className="border-t-8 border-blue-500 border-solid rounded-full h-12 w-12 animate-spin  "></div>
    </div>
  );
};

export default Loader;