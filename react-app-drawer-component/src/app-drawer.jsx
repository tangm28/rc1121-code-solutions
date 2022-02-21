import React from 'react';

class AppMenuOptions extends React.Component {
  render() {
    const menuOptions = this.props.menuOptions;
    return (
      menuOptions.map(options =>
        <p key={options.title} >{options.title}</p>
      )
    );
  }
}

class AppMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.className === 'modal' || event.target.tagName === 'P') {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div className='modal' onClick={this.handleClick}>
        <div className='modal-content'>
          <h2>Menu</h2>
          <AppMenuOptions
          menuOptions={this.props.menuOptions}
          />
        </div>
      </div>
    );
  }
}

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    return (
      <div>
        <div className='bar-menu'>
          <i className="fas fa-bars" onClick={this.handleClick}></i>
        </div>
        <div className={this.state.modalOpen ? '' : 'hidden'}>
          <AppMenu
          menuOptions={this.props.menuOptions}
          onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default AppDrawer;
