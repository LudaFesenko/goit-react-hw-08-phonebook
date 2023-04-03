import React from 'react';
import { useSelector } from 'react-redux';

import { List, ListItem } from './ContactList.styled';
import Contact from './Contact';
import { selectFilteredContacts } from 'redux/selectors';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <Contact id={id} name={name} number={phone} />
        </ListItem>
      ))}
    </List>
  );
}

export default ContactList;
