import React, { Fragment } from 'react';
import AsidePane from './asidePane/AsidePane';

interface ILayoutProps {
  children: any,
}

const Layout = (props: ILayoutProps): JSX.Element => {
  return (
    <Fragment>
      <AsidePane expandWidth="1fr" position="left"/>
      {props.children}
      <AsidePane expandWidth="1fr" position="right"/>
    </Fragment>
  )
}

export default Layout;
