import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { nanoid } from "nanoid";
class Form extends Component {
  // handleChange = e => {
  // this.setState({ name: e.target.value });
  // };
  state = {
    name: '',
    number: '',
  };
  handleChangeContact = e => {
    this.setState({ name: e.currentTarget.value });
  };
  handleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };
    handleSubmit = e => {
        e.preventDefault();
        const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    const form = e.currentTarget;
    this.props.addContact(contact);
    console.log(this.state.name);
    console.log(this.state.number);
    form.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>Name</span>
          <input
            onChange={this.handleChangeContact}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            onChange={this.handleChangeNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
