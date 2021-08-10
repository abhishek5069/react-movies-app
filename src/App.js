import React from "react";
import Child from "./Child";

class App extends React.Component{
  state={
    no:true,
  };

  render(){
    return (
      <div>
        <button onClick={
          ()=>{
            if(this.state.no){
              this.setState({no:false});
            }else{
              this.setState({no:true});
            }
          } 
        }>child toggle</button>
        {this.state.no?<Child />:""}
      </div>
    );
  }
}

export default App;