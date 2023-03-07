import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Layout } from './Layout';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const STORE_KEY = 'contacts';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem(STORE_KEY);

  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }

  return INITIAL_STATE;
};

function App() {
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(getInitialContacts);

  useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const existed = contacts.find(contact => contact.name === name);

    if (existed) {
      alert(`${name} is already in contact`);
      return false;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts(prevState => [...prevState, newContact]);
    return true;
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const handleSearch = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleSearch} />
      <ContactList list={filteredContacts} onDelete={deleteContact} />
    </Layout>
  );
}

export default App;
