import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.counter.value, tags: ["tag1", "tag2", "tag3"] };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btm-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag} </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    console.log("Increment Clicked", this.state.value);
    this.setState({ value: this.state.value + 1 });
  };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
