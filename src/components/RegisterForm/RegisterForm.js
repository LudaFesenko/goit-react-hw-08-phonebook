import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/auth-operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
              label="Username"
              variant="outlined"
              type="text"
              name="name"
              size="small"
            />
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
              Register
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
