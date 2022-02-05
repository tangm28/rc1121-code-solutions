import React from 'react';
import ReactDOM from 'react-dom';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="signup-email">Email:</label>
        <input name="email"
               type="email"
               id="signup-email"
               value={this.state.email}
               onChange={this.handleChange}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <EmailForm />,
  document.querySelector('#root')
);
