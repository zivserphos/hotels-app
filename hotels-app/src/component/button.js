import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        style={{ backgroundColor: this.props.color }}
        onClick={() => this.props.changeColor(this.props.color)}
      ></button>
    );
  }
}

export default Button;
