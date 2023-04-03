import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Button } from './ContactList.styled';
import { deleteContact } from '../../redux/operations';

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const removeContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {name}: {number}
      <Button onClick={removeContact}>Delete</Button>
    </div>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
