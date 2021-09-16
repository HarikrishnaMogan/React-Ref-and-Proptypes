import React from "react";
import Counter from "./counter";
/*
//simple ref exapmle
class App extends React.Component{
    
    inputRef = React.createRef();

    handle=()=>{
        console.log(this.inputRef); // output:{current: input}
        console.log(this.inputRef.current);//output:<input type="text" />
        console.log(this.inputRef.current.value);//output:Guvi (value submitted in input)
    }
    render(){
        return(
            <>
           <h1>Hariooo</h1>
           <input type="text" ref={this.inputRef} />
           <button onClick={this.handle}>sumbit</button>
           </>

        );
    }
}

export default App;
*/
class App extends React.Component{
    
     inputRef = React.createRef();

    handle=()=>{
       console.log(this.inputRef.current);
       this.inputRef.current.increment();
    }
    render(){
        return(
            <>
           <h1>Hariooo</h1>
            <Counter ref={this.inputRef} />
           <button onClick={this.handle}>sumbit</button>
           </>
        );
    }
}

export default App;
