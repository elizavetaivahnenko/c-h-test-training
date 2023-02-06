import React, { Component } from "react";

export default class Managed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary, addItem } = this.state;
    return (
      <div>
        <form action="">
          <input
            type="text"
            placeholder="input your Name"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="text"
            placeholder="input your salary"
            name="salary"
            onChange={this.onValueChange}
          />
          <button type="submit">add elements</button>
        </form>
        <a href="https://learnetto.com/blog/react-form-validation">
          infoAboutValidation
        </a>
      </div>
    );
  }
}
