import React from "react";
import Counter from "./counter";
function Appfunc()
{
    const inputRef = React.useRef();
     let handle=()=>{
         inputRef.current.increment();
     }
    return(
        <>
        <Counter ref={inputRef} />
        <button onClick={handle}>submit</button>
        </>
    );
}
export default Appfunc;