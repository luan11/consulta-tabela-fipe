import styled from 'styled-components';
import Card from '@mui/material/Card';

export const Wrapper = styled(Card)`
  width: 40%;

  @media (max-width: 991px) {
    width: 75%;
  }

  @media (max-width: 576px) {
    width: calc(100% - 2rem);
  }
`;
