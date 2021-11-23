import React, { memo} from "react";
const File1 = ({handleInputChange}) => {
    console.log("rendered file1");
  return (
    <div>
      <button onClick={handleInputChange}>click file 1</button>
    </div>
  );
};

// return (
//
// );

export default memo(File1);
