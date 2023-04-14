import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function HomePage() {
  return (
    <Container>
      <Box sx={{ pt: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          Welcome to Phonebook
        </Typography>
        <Typography>For using this program please register</Typography>
        <Typography>If you signup please login</Typography>
      </Box>
    </Container>
  );
}

export default HomePage;
