import styled from 'styled-components';
import Card from '@mui/material/Card';

export const Form = styled(Card)`
  min-width: 35%;

  @media (max-width: 991px) {
    min-width: 75%;
  }

  @media (max-width: 576px) {
    min-width: calc(100% - 2rem);
  }
`;
