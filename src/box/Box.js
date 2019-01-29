import React, {Component} from 'react';
import {DragSource} from 'react-dnd'
import './box.css';
import {ItemTypes} from '../Constants';
import {default as TypographyWrapper} from '../TypographyWrapper';
import {default as Button} from '../button/Button';

const boxSource = {
  beginDrag(props) {
    const {id, left, top} = props;
    return {id, left, top}
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Box extends Component {
  constructor(props) {
    super(props)

    this.state = {
      top: this.props.top,
      left: this.props.left,
      priority: this.props.priority,
    }
  }

  calculateStyle = () => {
    return {
      top: this.state.top,
      left: this.state.left,
      transform: setScale(this.state.priority)
    }
  }

  handleUpdate(e) {
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
          <Button btnType="alert" value="x" className="alert"/>
          <Button btnType="accept" value="&#x2713;" className="accept"/>
          <Button btnType="info" value="i" className="info"/>
          <Button btnType="more" value=">" className="more"/>
        </div>
      </div>
    );
  }
}

const setScale = (factor = 10) => {
  return `scale(${factor / 10})`;
};

const BoxHeader = ({title, priority, handleUpdate}) => {
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
