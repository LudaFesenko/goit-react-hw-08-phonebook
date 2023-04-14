import { Helmet } from 'react-helmet';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  return (
    <Container maxWidth="xs">
      <Box sx={{ pt: 4 }}>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </Box>
    </Container>
  );
}
