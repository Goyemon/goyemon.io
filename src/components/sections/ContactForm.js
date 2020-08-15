import React from 'react';

import { Section, Container } from '@components/global';

import styled from 'styled-components';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ''
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  renderForm = () => {
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xnqgrrwr"
        method="POST"
      >
        <label>Your Name</label>
        <input type="text" name="name" required />
        <label>Your Email</label>
        <input type="email" name="_replyto" required />
        <label>Message</label>
        <input type="text" name="message" required />
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        {this.state.status === 'SUCCESS' ? (
          <p>Thank U! 😃 We will get back to you as soon as possible.</p>
        ) : (
          <button>Submit</button>
        )}
        {this.state.status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </form>
    );
  };

  render() {
    return (
      <Section id="talk-to-us" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1 style={{ marginBottom: 40 }}>Talk to Us</h1>
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
    margin-top: 8px;
    margin-bottom: 40px;
    width: 100%;
  }

  input[type='email'] {
    border: none;
    border-bottom: #eeeeee 2px solid;
    display: block;
    margin-top: 8px;
    margin-bottom: 40px;
    width: 100%;
  }

  select {
    border: none;
    display: block;
    margin-top: 8px;
    margin-bottom: 40px;
    width: 100%;
  }

  button {
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
