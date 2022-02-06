import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { carouselIndex: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    clearInterval(this.carouselID);
    if (event.target.className === 'fas fa-chevron-right') {
      this.carouselRight();
    } else if (event.target.className === 'fas fa-chevron-left') {
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
      <i className={carouselItems.indexOf(items) === this.state.carouselIndex ? 'fas fa-circle' : 'far fa-circle'}
        key={carouselItems.indexOf(items)}></i>);
    return (
      <div className='carousel'>
        <i className="fas fa-chevron-left" onClick={this.handleClick}></i>
        <div>
          <img src={carouselItems[this.state.carouselIndex].imgUrl} alt="" />
          <div className='dotTracker'>
            {dots}
          </div>
        </div>
        <i className="fas fa-chevron-right" onClick={this.handleClick}></i>
      </div>
    );
  }
}

export default Carousel;
