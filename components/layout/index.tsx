import React, { FC } from 'react';
import { HomePropTypes } from 'types/home';
import Header from './Header';
import * as Style from './style';
const Layout: FC<HomePropTypes> = ({ children }) => {
  return (
    <>
      <Header />
      <Style.Wrapper>{children}</Style.Wrapper>
    </>
  );
};

export default Layout;
