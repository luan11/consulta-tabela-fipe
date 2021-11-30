import styled from 'styled-components';
import Box from '@mui/material/Box';

export const Wrapper = styled(Box)`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { palette } }) => palette.grey[100]};
`;
