import React, {Component, Fragment} from 'react';
import AsidePane from './asidePane/AsidePane';

interface ILayoutProps {
  children: any,
}

class Layout extends Component<ILayoutProps, any> {
  render() {
    return (
      <Fragment>
        <AsidePane expandWidth="1fr" position="left"/>
        {this.props.children}
        <AsidePane expandWidth="1fr" position="right"/>
      </Fragment>
    )
  }
}

export default Layout;
