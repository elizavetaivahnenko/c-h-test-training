import { Component } from "react";
import React from "react";
export default class EmployersListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, salary, onDelete } = this.props;
    return (
      <>
        <li>{name}</li>
        <li>{salary}</li>
        <button onClick={onDelete}>delete</button>
      </>
    );
  }
}
