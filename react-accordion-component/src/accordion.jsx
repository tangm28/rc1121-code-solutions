import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionSelected: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.textContent === this.state.sectionSelected) {
      this.setState({ sectionSelected: '' });
    } else {
      this.setState({ sectionSelected: event.target.textContent });
    }
  }

  render() {
    const accordionItems = this.props.accordionItems;
    return (
      accordionItems.map(items =>
        <div key={items.sectionHeader}>
          <div onClick={this.handleClick}>
              <p className='title'>{items.sectionHeader}</p>
            </div>
            <div className= {this.state.sectionSelected === items.sectionHeader ? '' : 'hidden'}>
              <p className='content'>{items.sectionContent}</p>
            </div>
          </div>
      )
    );
  }
}

export default Accordion;
