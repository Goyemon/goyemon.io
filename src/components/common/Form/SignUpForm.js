import addToMailchimp from 'gatsby-plugin-mailchimp';
import React from 'react';

export default class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = { email: '', result: null };
  }

  _handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email);
    this.setState({ result: result });
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <label>
          Email
          <br />
          <input
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        />
      </form>
    );
  }
}
