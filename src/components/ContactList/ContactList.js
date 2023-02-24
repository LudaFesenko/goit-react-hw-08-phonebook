import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from './ContactList.styled';
import Contact from './Contact';

function ContactList({ list, onDelete }) {
  return (
    <List>
      {list.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact id={id} name={name} number={number} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
