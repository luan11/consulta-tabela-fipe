import { Wrapper } from './styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Header = () => (
  <Wrapper component="header">
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" fontWeight={600}>
        Tabela FIPE
      </Typography>
    </Container>
  </Wrapper>
);

export default Header;
