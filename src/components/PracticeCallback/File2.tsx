import React, { memo} from "react";

const File2 = ({handleInputChange}) => {
  console.log("rendered file2",handleInputChange);
  return (
    <div>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
};

export default memo(File2);
