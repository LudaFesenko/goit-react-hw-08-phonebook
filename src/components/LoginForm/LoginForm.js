import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Stack spacing={3}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              size="small"
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              size="small"
            />

            <Button type="submit" variant="contained">
              Log In
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};
