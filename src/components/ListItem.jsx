import React, { Component } from "react";
import Context from "../contexts/Context";

export default class ListItem extends Component {
  render() {
    return (
      <Context.Consumer>
        {(theme) => {
          return <>
            <li style={{ backgroundColor: theme }}>Hello</li>
            <li style={{ backgroundColor: theme }}>Hello</li>
            <li style={{ backgroundColor: theme }}>Hello</li>
            <li style={{ backgroundColor: theme }}>Hello</li>
          </>;
        }}
      </Context.Consumer>
    );
  }
}
