import React, { Component } from "react";

export default function RandomColorsHOC(MyComponent) {
  class RandomColors extends Component {
    RandomColors() {
      let r = Math.floor(Math.random() * (255 - -255 + 1));
      let g = Math.floor(Math.random() * (255 - -255 + 1));
      let b = Math.floor(Math.random() * (255 - -255 + 1));
      let rgb = `rgb(${r},${g},${b})`;
      return rgb;
    }
    render() {
      return <MyComponent BgColor={this.RandomColors()} />;
    }
  }
  return RandomColors;
}
