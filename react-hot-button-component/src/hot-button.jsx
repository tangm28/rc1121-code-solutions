import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    let btnClass;
    if (this.state.count >= 18) {
      btnClass = 'btn-white';
    } else if (this.state.count >= 15) {
      btnClass = 'btn-yellow';
    } else if (this.state.count >= 12) {
      btnClass = 'btn-orange';
    } else if (this.state.count >= 9) {
      btnClass = 'btn-red';
    } else if (this.state.count >= 6) {
      btnClass = 'btn-violet';
    } else if (this.state.count >= 3) {
      btnClass = 'btn-purple';
    }
    return (
      <button className={`btn ${btnClass}`} onClick={this.handleClick}>
        Hot Button
      </button>
    );
  }
}

export default HotButton;
