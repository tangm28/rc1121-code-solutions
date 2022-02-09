import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { carouselIndex: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    clearInterval(this.carouselID);
    if (event.target.className === 'fas fa-chevron-right font-large') {
      this.carouselRight();
    } else if (event.target.className === 'fas fa-chevron-left font-large') {
      this.carouselLeft();
    }
    this.carouselID = setInterval(
      () => this.carouselRight(),
      1.5 * 1000
    );

  }

  componentDidMount() {
    this.carouselID = setInterval(
      () => this.carouselRight(),
      1.5 * 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.carouselID);
  }

  carouselRight() {
    if (this.state.carouselIndex >= this.props.carouselItems.length - 1) {
      this.setState({ carouselIndex: 0 });
    } else {
      this.setState({
        carouselIndex: this.state.carouselIndex + 1
      });
    }
  }

  carouselLeft() {
    if (this.state.carouselIndex === 0) {
      this.setState({ carouselIndex: this.props.carouselItems.length - 1 });
    } else {
      this.setState({
        carouselIndex: this.state.carouselIndex - 1
      });
    }
  }

  render() {
    const carouselItems = this.props.carouselItems;
    const dots = carouselItems.map(items =>
      <i className={carouselItems.indexOf(items) === this.state.carouselIndex ? 'margin-5 fas fa-circle' : 'margin-5 far fa-circle'}
        key={carouselItems.indexOf(items)}></i>);
    return (
      <div className='carousel'>
        <i className="fas fa-chevron-left font-large" onClick={this.handleClick}></i>
        <div>
          <img src={carouselItems[this.state.carouselIndex].imgUrl} alt="" />
          <div className='dotTracker'>
            {dots}
          </div>
        </div>
        <i className="fas fa-chevron-right font-large" onClick={this.handleClick}></i>
      </div>
    );
  }
}

export default Carousel;
