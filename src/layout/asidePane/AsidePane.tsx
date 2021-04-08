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

  handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    console.log('click event', e)
  };

  render(): React.ReactNode {
    return (
      <aside onClick={this.handleClick} className={this.position}>
      </aside>
    )
  }
}

export default AsidePane;
