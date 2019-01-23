import React from 'react';
import PropTypes from 'prop-types';
import {DragSource} from 'react-dnd'
import './box.css';
import {ItemTypes} from '../Constants';
import {default as TypographyWrapper} from '../TypographyWrapper';

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

function Box({connectDragSource, isDragging, id, left, top, title, content, footer, hideSourceOnDrag}) {
  if (isDragging && hideSourceOnDrag) {
    return null;
  }
  return connectDragSource(
    <div id={id} style={{top, left}} className="box__wrapper">
      <BoxHeader title={title} />
      <TypographyWrapper content={content} className="box__content" />
      <div className="box__footer">
        {footer}
      </div>
    </div>
  );
}


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
  footer: PropTypes.string | PropTypes.object,
  connectDragSource: PropTypes.func.isRequired,
  top: PropTypes.number,
  left: PropTypes.number,
};

export default DragSource(ItemTypes.BOX, boxSource, collect)(Box);
