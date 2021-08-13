import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";

class App extends React.Component{
 
  state={
    movies:[],
    genre:[],
  }
  componentDidMount(){
    let f=async()=>{
      let resmov=await fetch("/movies");
      let resgen=await fetch("/genre");
      let movjson=await resmov.json();
      let genjson=await resgen.json();
      this.setState({
        movies:movjson,
        genre:genjson,
      });
      
    };
    f();
  
  }

  render(){
    return (
      <div>
        <Navbar />
        
        <Filter gendata={this.state.genre}/>
        
      </div>
    );
  }
}

export default App;