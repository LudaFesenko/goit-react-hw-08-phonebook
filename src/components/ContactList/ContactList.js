import List from '@mui/material/List';
import { useSelector } from 'react-redux';

import Contact from './Contact';
import { selectFilteredContacts } from 'redux/contacts/contacts-selectors';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
}
