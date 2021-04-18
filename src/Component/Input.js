import React from "react";

const Input = ({ name, value, handleChange, id }) => {
  return (
    <input
      type={typeof value === Number ? "number" : "text"}
      name={name}
      value={value}
      onChange={(e) => handleChange(e, id)}
    />
  );
};

export default React.memo(Input);
