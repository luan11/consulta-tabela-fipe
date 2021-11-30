import { ReactNode } from 'react';

import { Wrapper } from './styles';

interface IMainProps {
  children: ReactNode;
}

const Main = ({ children }: IMainProps) => (
  <Wrapper component="main">{children}</Wrapper>
);

export default Main;
