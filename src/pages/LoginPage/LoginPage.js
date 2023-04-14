import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Login() {
  return (
    <Container maxWidth="xs">
      <Box sx={{ pt: 4 }}>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </Box>
    </Container>
  );
}
