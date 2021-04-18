import React from 'react';
import { useDrop, XYCoord } from 'react-dnd';
import { ItemTypes } from '../constants';
import './boxDashboard.scss';

const BoxDashboard = (props: any): JSX.Element => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      const element: any = monitor.getItem();
      const delta = monitor.getSourceClientOffset() as XYCoord;
      const left = Math.round(delta.x - 16) + 'px';
      const top = Math.round(delta.y - 16) + 'px';
      element.updatePosition(top, left)
    }
  }))

  return(
    <div ref={drop} className={'boxDashboard'} id={'boxDashboard'}>
      {props.children}
    </div>
  );
}

export default BoxDashboard;
