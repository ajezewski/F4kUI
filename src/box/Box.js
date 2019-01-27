import React from 'react';
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

function Box({connectDragSource, isDragging, id, priority, left, top, title, content, hideSourceOnDrag}) {
  if (isDragging && hideSourceOnDrag) {
    return null;
  }
  const style = Object.assign({}, {top, left}, setScale(priority));
  return connectDragSource(
    <div id={id} style={style} className="box__wrapper">
      <BoxHeader title={title} />
      <TypographyWrapper content={content} className="box__content" />
      <div className="box__footer">
        <Button btnType="alert" value="x" className="alert"/>
        <Button btnType="accept" value="&#x2713;" className="accept"/>
        <Button btnType="info" value="i" className="info"/>
        <Button btnType="more" value=">" className="more"/>
      </div>
    </div>
  );
}

const setScale = (factor = 10) => {
  return { transform: `scale(${factor / 10})` }
};

const BoxHeader = ({title}) => {
  return (
    <div className="box__title">
      {title}
    </div>
  )
};

Box.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
  priority: PropTypes.number,
  connectDragSource: PropTypes.func.isRequired,
  top: PropTypes.number,
  left: PropTypes.number,
};

export default DragSource(ItemTypes.BOX, boxSource, collect)(Box);
