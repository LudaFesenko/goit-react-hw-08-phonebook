import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contacts-operations';
function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const removeContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem key={id}>
      <ListItemAvatar>
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} />

      <IconButton edge="end" aria-label="delete" onClick={removeContact}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
