import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';

function ContactsBook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="xs">
      <Stack spacing={3} sx={{ pt: 4 }}>
        <Typography component="h1" variant="h3">
          Phonebook
        </Typography>
        <ContactForm />
        {isLoading && !error && (
          <CircularProgress
            sx={{ position: 'fixed', top: '50%', left: '50%' }}
          />
        )}
        <Typography component="h2" variant="h4">
          Contacts
        </Typography>
        <Filter />
        <ContactList />
      </Stack>
    </Container>
  );
}

export default ContactsBook;
