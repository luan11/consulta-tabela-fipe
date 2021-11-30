import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Wrapper } from './styles';

const Header = () => (
  <Wrapper component="header">
    <Container maxWidth="lg">
      <Typography variant="h5" align="center" fontWeight={600} color="grey.800">
        Tabela FIPE
      </Typography>
    </Container>
  </Wrapper>
);

export default Header;
