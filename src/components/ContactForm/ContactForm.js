import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

class ContactForm extends Component {
    loginInputId = nanoid();
    state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
    contacts: [],
    name: '',
    number: '',
    });
  };
  nameChange = e => {
    this.setState({
      name: e.target.value,
    });
  };
  numberChange = e => {
    this.setState({
        contacts: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.nameChange}
          />
        </label>
        <label htmlFor={this.loginInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.numberChange}
          />
        </label>
        <button type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};