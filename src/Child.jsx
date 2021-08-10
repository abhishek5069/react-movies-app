import React from "react";
class Child extends React.Component{
  constructor(props){
    super(props);
    console.log("cons");
    this.state={
      on:false,
    };
  }

  // state={}
  componentDidMount(){
    console.log("mount is called");
  }
  componentDidUpdate(){
    console.log("comp is updated");
  }
  componentWillUnmount(){
    console.log("component is unmount");
  }
  render(){
    console.log("render is called");
    return (<div>
      <button onClick={
        ()=>{
          if(this.state.on){
            this.setState({on:false});
          }else{
            this.setState({on:true});
          }
        }
      }>button</button>
    </div>
    );
  }
}
export default Child;