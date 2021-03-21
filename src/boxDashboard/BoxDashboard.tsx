import React, {Component} from 'react';
import {
  ConnectDropTarget,
  DropTarget,
  DropTargetMonitor,
  XYCoord,
} from 'react-dnd';
import {ItemTypes} from '../Constants';
import './boxDashboard.css';


const boxTarget = {
  drop(
    props: BoxDashboardProps,
    monitor: DropTargetMonitor,
    component: BoxDashboard | null,
  ) {
    if (!component) {
      return;
    }

    const item:any = monitor.getItem();
    const delta = monitor.getSourceClientOffset() as XYCoord;
    const left = Math.round(delta.x - 16);
    const top = Math.round(delta.y - 16);
    component.moveBox(item.id, left, top);
  }
};

interface BoxDashboardProps {
  hideSourceOnDrag: boolean;
  children: any;
  boxes: any[]
}

interface BoxDashboardCollectedProps {
  connectDropTarget: ConnectDropTarget;
}

class BoxDashboard extends Component<
  BoxDashboardProps & BoxDashboardCollectedProps
> {
  protected children: any;

  constructor(props: BoxDashboardProps & BoxDashboardCollectedProps) {
    super(props);
    this.children = props.children;
  }

  render() {
    const { hideSourceOnDrag, connectDropTarget } = this.props;

    return connectDropTarget(
      <div className={'boxDashboard'} id={'boxDashboard'}>
        {this.children}
      </div>
    );
  }

  moveBox(id: string, left: number, top: number) {
    const box: HTMLElement | null = document.getElementById(id);
    if (box) {
      box.style.position = 'absolute';
      box.style.top = top + 'px';
      box.style.left = left + 'px';
    }
  }
}

export default DropTarget<BoxDashboardProps, BoxDashboardCollectedProps>(
  ItemTypes.BOX,
  boxTarget,
  (connect: any) => ({
    connectDropTarget: connect.dropTarget()
  })
)(BoxDashboard);
