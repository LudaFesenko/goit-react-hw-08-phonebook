import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks';

export default function ButtonAppBar() {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" to="/" component={Link}>
            PhoneBook
          </Button>

          {isLoggedIn ? (
            <>
              <Button color="inherit" to="/contacts" component={Link}>
                Contacts
              </Button>
              <Typography variant="h6" sx={{ ml: 'auto' }}>
                Welcome, {user.name}
              </Typography>
              <Button
                color="inherit"
                onClick={() => dispatch(logOut())}
                sx={{ ml: 1 }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                to="/register"
                component={Link}
                sx={{ ml: 'auto' }}
              >
                Registration
              </Button>
              <Button color="inherit" to="/login" component={Link}>
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
