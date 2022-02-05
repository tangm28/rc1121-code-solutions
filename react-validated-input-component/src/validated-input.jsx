import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      correctLogin: false,
      pwVerbiage: '',
      icon: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password.length >= 8) {
      this.setState({ correctLogin: true, pwVerbiage: '', icon: 'fas fa-check' });
    } else {
      if (this.state.password.length === 0) {
        this.setState({ pwVerbiage: 'A password is required.', icon: 'fas fa-times' });
      } else {
        this.setState({ pwVerbiage: 'Your password is too short.', icon: 'fas fa-times' });
      }
      this.setState({ correctLogin: false });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Password</label>
          <div>
            <input name="password"
              type="password"
              id="login-password"
              value={this.state.password}
              onChange={this.handleChange} />
            <i className={this.state.icon}></i>
          </div>
          <p className='password-verbiage'>{this.state.pwVerbiage}</p>
        </form>
      </div>
    );
  }
}

export default ValidatedInput;
