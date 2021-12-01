import styled from 'styled-components';
import Grid from '@mui/material/Grid';

export const Container = styled(Grid)`
  margin: 0 0 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
