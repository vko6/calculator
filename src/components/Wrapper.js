import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div>
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default Wrapper;
