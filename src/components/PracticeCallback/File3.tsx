import React, { memo } from "react";

const File3 = ({handleInputChange}) => {
  console.log("rendered file3");

 
  return (
    <div>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
};

export default memo(File3);
