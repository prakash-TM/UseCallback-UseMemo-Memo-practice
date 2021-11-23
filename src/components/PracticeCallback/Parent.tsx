import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import File1 from "./file1";
import File2 from "./file2";
import File3 from "./file3";





const Parent=()=>{
    const [number, setNumber] = useState(100);
  const [name, setName] = useState("");
  const [id, setId] = useState("CESIT/100");
  const [age, setAge] = useState("");


  console.log("in parent")

    const idGen = useCallback(() => {
        setNumber(number+2)
        setId("CESIT/"+number)
    },[number]);
    



    const funName = useCallback((e: any) => {
      setName(e.target.value);
    },[name]);
    


    const funAge = useCallback((e: any) => {
        setAge(e.target.value);
      },[age]);
      

    return(
        <div>
           
            <File1 handleInputChange={idGen} />
            <h4>Id is {id}</h4>
            <File2 handleInputChange={funName}/>
            <h4>Name is {name}</h4>
            <File2 handleInputChange={funAge}/>
            <h4>Age is{age}</h4>
           
           
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
      <Parent />
    </React.StrictMode>,
    document.getElementById('root')
  )