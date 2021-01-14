import React, {Component, Props} from 'react';
import {DragSource} from 'react-dnd'
import './box.css';
import {ItemTypes} from '../Constants';
import {default as TypographyWrapper} from '../TypographyWrapper';
import {default as Button} from '../button/Button';

interface BoxProps  {
  top:any,
  left: any,
  priority: any
}
const boxSource = {
  beginDrag(props: any) {
    const {id, left, top} = props;
    return {id, left, top}
  }
};

function collect(connect: any, monitor: any) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Box extends Component<any, any> {
  constructor(props:any) {
    super(props)

    this.state = {
      top: this.props.top,
      left: this.props.left,
      priority: this.props.priority,
    } as any
  }

  calculateStyle: any = () => {
    return {
      top: this.state.top,
      left: this.state.left,
      transform: setScale(this.state.priority)
    }
  }

  handleUpdate(e:any) {
    const value = e.target.value;
    this.setState({ priority: value });
  }

  render() {
    if (this.props.isDragging && this.props.hideSourceOnDrag) {
      return null;
    }

    return this.props.connectDragSource(
      <div id={this.props.id} style={this.calculateStyle()} className="box__wrapper">
        <BoxHeader
          title={this.props.title}
          priority={this.state.priority}
          handleUpdate={this.handleUpdate.bind(this)}
          />
        <TypographyWrapper content={this.props.content} className="box__content" />
        <div className="box__footer">
          <Button btnType="button" value="x" className="alert"/>
          <Button btnType="button" value="&#x2713;" className="accept"/>
          <Button btnType="button" value="i" className="info"/>
          <Button btnType="button" value=">" className="more"/>
        </div>
      </div>
    );
  }
}

const setScale = (factor = 10) => {
  return `scale(${factor / 10})`;
};

const BoxHeader = (properties: any) => {
  const {title, priority, handleUpdate} = properties;
  return (
    <div className="box__header">
      <div className="box__title">
        {title}
      </div>
      <input type="number"
        className="box__header__input"
        value={priority}
        onChange={handleUpdate}
        max="10" min="1"
        title="Change priority to zoom in/out"
      />
    </div>
  )
};

export default DragSource(ItemTypes.BOX, boxSource, collect)(Box);
