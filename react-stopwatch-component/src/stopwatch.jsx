import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      seconds: 0
    };
    this.stopWatchId = null;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ play: !this.state.play });
    if (this.stopWatchId === null) {
      if (this.state.seconds > 0) {
        this.setState({ seconds: 0 });
      }
      this.stopWatchId = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    } else {
      clearInterval(this.stopWatchId);
      this.stopWatchId = null;
    }
  }

  render() {
    return (
      <div className='container'>
        <div className="stopwatch">
          <span>{this.state.seconds}</span>
        </div>
        <div className='play-button'>
          <i className={`${this.state.play ? 'fas fa-pause' : 'fas fa-play'}`} onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
