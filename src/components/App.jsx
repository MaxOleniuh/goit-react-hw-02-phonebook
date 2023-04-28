import { Component } from 'react';
import Form from './Form/Form';
import List from './List/List';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
    // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  };
  addContact = (contact) => {
    this.setState((prevState) => ({ contacts: [...prevState.contacts, contact] }));
  };
  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }
  render() {
    console.log(this.state.filter)
    return (
      <>
        <h2>Phonebook</h2>
        <Form addContact={this.addContact} />
        <h3>Contacts</h3>
        <Filter onChange={this.changeFilter} />
        <List contacts={this.state.contacts} />
      </>
    );
  }
}
