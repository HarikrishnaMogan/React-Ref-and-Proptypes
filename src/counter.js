import React from "react";
//if you use counter as functional component it wont work because functional component does not give ref
class counter extends React.Component{
    constructor(props)
    {
        super(props);
         this.state ={
             count:0,
         }
    }
     
    increment=()=>{this.setState({count:this.state.count+1})}
    decrement=()=>{this.setState({count:this.state.count-1})}
    reset=()=>{this.setState({count:0})}
    render()
    {
        return(<>
         <p>Count:{this.state.count}</p>
         <button onClick={this.increment}>increment</button>
         <button onClick={this.decrement}>decrement</button>
         <button onClick={this.reset}>reset</button>
        </>);
    }
}
export default counter;