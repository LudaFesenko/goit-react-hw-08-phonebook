import React from 'react';
import { useSelector } from 'react-redux';

import { List, ListItem } from './ContactList.styled';
import Contact from './Contact';

const getFilteredContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact id={id} name={name} number={number} />
        </ListItem>
      ))}
    </List>
  );
}

export default ContactList;
