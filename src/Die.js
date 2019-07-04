import React from "react";

class Die extends React.Component {
  render() {
    return <i className={`Die fas fa-dice-${this.props.dice}`} />;
  }
}

export default Die;
