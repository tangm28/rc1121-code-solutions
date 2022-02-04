import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
      <div className={`toggleContainer ${this.state.isClicked ? 'on' : 'off'}`} onClick={this.handleClick}>
        <div className="circle"></div>
      </div>
    );
  }
}

export default ToggleSwitch;
