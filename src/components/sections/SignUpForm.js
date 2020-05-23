import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import { Section, Container } from '@components/global';

import styled from 'styled-components';

export default class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = { name: null, email: null, device: 'ios', result: '' };
  }

  _handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email, {
      device: this.state.device,
      name: this.state.name
    });
    this.setState({ result });
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleDevice = (event) => {
    this.setState({ device: event.target.value });
  };

  renderForm = () => {
    if (this.state.result.result === 'success') {
      return <p>Thank you for signing up!😄</p>;
    } else if (this.state.result.result === 'error') {
      return (
        <form onSubmit={this._handleSubmit}>
          <label>
            name
            <input type="text" onChange={this.handleName} />
          </label>
          <label>
            email
            <input type="email" onChange={this.handleEmail} />
          </label>
          <label>
            device
            <select value={this.state.device} onChange={this.handleDevice}>
              <option value="ios">iOS</option>
              <option value="android">Android</option>
            </select>
          </label>
          <input type="submit" value="Sign Up for Beta" />
          <p>Something went wrong 🤷‍</p>
        </form>
      );
    }
    return (
      <form onSubmit={this._handleSubmit}>
        <label>name</label>
        <input type="text" onChange={this.handleName} />
        <label>email</label>
        <input type="email" onChange={this.handleEmail} />
        <label>device</label>
        <select value={this.state.device} onChange={this.handleDevice}>
          <option value="ios">iOS</option>
          <option value="android">Android</option>
        </select>
        <input type="submit" value="Sign Up for Beta" />
      </form>
    );
  };

  render() {
    return (
      <Section id="sign-up" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1 style={{ marginBottom: 40 }}>Sign Up</h1>
          <Wrapper>{this.renderForm()}</Wrapper>
        </Container>
      </Section>
    );
  }
}

const Wrapper = styled.div`
  form {
    background-color: #fff;
    ${(props) => props.theme.font_size.regular};
    padding: 8% 16%;
    margin: 0 auto;
  }

  label {
    display: block;
    ${(props) => props.theme.font_size.small};
    text-transform: uppercase;
  }

  input:focus {
    outline: none;
  }

  select:focus {
    outline: none;
  }

  input[type='text'] {
    border: none;
    border-bottom: #eeeeee 2px solid;
    display: block;
    margin-top:8px;
    margin-bottom: 40px;
    width: 100%;
  }

  input[type='email'] {
    border: none;
    border-bottom: #eeeeee 2px solid;
    display: block;
    margin-top:8px;
    margin-bottom: 40px;
    width: 100%;
  }

  select {
    border: none;
    display: block;
    margin-top:8px;
    margin-bottom: 40px;
    width: 100%;
  }

  input[type='submit'] {
    background-color: #00a3e2;
    border: none;
    border-radius: 8px;
    color: #fff;
    ${(props) => props.theme.font_size.small};
    margin: 0 auto;
    margin-top: 24px;
    padding: 12px 16px;
    width: 100%;
  }

  p {
    color: #e41b13;
    ${(props) => props.theme.font_size.small};
    margin-top: 12px;
    text-align: center;
  }
`;
