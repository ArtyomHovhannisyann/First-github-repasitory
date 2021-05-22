import React, { Component } from "react";
import RandomColorsHOC from "../myHOCs/RandomColorsHOC";
import Header from "./Header";
import Context from "../contexts/Context";

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            theme:"red"
        }
        // this.changeColor = this.changeColor.bind(this)
    }
     a = setInterval(() => {
        this.setState((prev)=>({theme:prev.theme == "red" ? "blue" : "red"}))
        
    }, 100);


  render() {
    return (
      <Context.Provider value = {this.state.theme}>
          <button onClick = {this.changeColor}>Change Color</button>
          <Header />
      </Context.Provider>
    );
  }
}
export default RandomColorsHOC(Home);
