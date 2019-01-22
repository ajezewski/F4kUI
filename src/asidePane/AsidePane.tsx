import React from 'react';
import './asidePane.css';

class AsidePane extends React.Component {
  private expandWidth: string;
  private position: string;
  private style: object = {};

  constructor(props: any) {
    super(props);
    this.expandWidth = props.expandWidth;
    this.position = props.position;
  }

  handleClick = (e: React.MouseEvent<HTMLElement>) => {
  };

  render() {
    return (
      <aside onClick={this.handleClick} className={this.position}>
      </aside>
    )
  }
}

export default AsidePane;
