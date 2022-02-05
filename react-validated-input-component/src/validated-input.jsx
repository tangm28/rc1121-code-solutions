import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      correctLogin: false,
      pwVerbiage: 'A password is required.'
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
      this.setState({ correctLogin: true, pwVerbiage: '' });
    } else {
      if (this.state.password.length === 0) {
        this.setState({ pwVerbiage: 'A password is required.' });
      } else {
        this.setState({ pwVerbiage: 'Your password is too short.' });
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
            <i className={this.state.correctLogin ? 'fas fa-check' : 'fas fa-times'}></i>
          </div>
          <p className='password-verbiage'>{this.state.pwVerbiage}</p>
        </form>
      </div>
    );
  }
}

export default ValidatedInput;
