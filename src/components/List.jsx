import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  render() {
    return (
      <ul className="menu">
        <ListItem />
      </ul>
    );
  }
}
