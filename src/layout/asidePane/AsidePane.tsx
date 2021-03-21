import React from 'react';
import './asidePane.css';

interface IAsidePaneProps {
  expandWidth: string,
  position: string,
}

class AsidePane extends React.Component<IAsidePaneProps, any> {
  private expandWidth: string;
  private position: string;
  private style = {};

  constructor(props: any) {
    super(props);
    this.expandWidth = props.expandWidth;
    this.position = props.position;
  }

  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log('click event')
  };

  render() {
    return (
      <aside onClick={this.handleClick} className={this.position}>
      </aside>
    )
  }
}

export default AsidePane;
