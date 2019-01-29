import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

  render() {
    if (this.props.isDragging && this.props.hideSourceOnDrag) {
      return null;
    }

    return this.props.connectDragSource(
      <div id={this.props.id} style={this.calculateStyle()} className="box__wrapper">
        <BoxHeader title={this.props.title} priority={this.state.priority}/>
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

const BoxHeader = ({title, priority}) => {
  return (
    <div className="box__title">
      {title}
      <input type="number"
        value={priority}
        onChange={(value) => console.log(value)}
        max="10" min="1"/>
    </div>
  )
};

export default DragSource(ItemTypes.BOX, boxSource, collect)(Box);
