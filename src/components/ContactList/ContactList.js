import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem, Button } from './ContactList.styled';

function ContactList({ list, onDelete }) {
  return (
    <List>
      {list.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button onClick={() => onDelete(id)}>Delete</Button>
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
