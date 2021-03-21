import React, {Component, Props} from 'react';
import {DragSource} from 'react-dnd'
import './box.css';
import {ItemTypes} from '../Constants';
import {default as TypographyWrapper} from '../TypographyWrapper';
import {default as Button} from '../button/Button';

interface BoxProps  {
  id: string;
  top: any;
  left: any;
  priority: any;
  class?: string;
}
const boxSource = {
  beginDrag(props: BoxProps) {
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
    const { top, left } = randomPosition();
    this.state = {
      top: top,
      left: left,
      priority: this.props.priority || 10,
      class: '',
    } as any
  }

  calculateStyle: any = () => {
    return {
      top: this.state.top,
      left: this.state.left,
      transform: setScale(this.state.priority),
      opacity: this.state.priority >= 8 ? '1' : (this.state.priority + 2)/10
    }
  }

  handleUpdate(e:any) {
    const value = e.target.value;
    this.setState({ priority: value });
  }

  maximilaze() {
    this.setState({...this.state, class: 'fullMode'});
  }

  minimalize() {
    const classes = this.state.class.replace('fullMode', '');

    this.setState({ ...this.state, class: classes})
  }
  render() {
    if (this.props.isDragging && this.props.hideSourceOnDrag) {
      return null;
    }

    return this.props.connectDragSource(
      <div id={this.props.id} style={this.calculateStyle()} className={this.state.class + ' box__wrapper'}>
        <BoxHeader
          title={this.props.title}
          priority={this.state.priority}
          handleUpdate={this.handleUpdate.bind(this)}
          />
        <TypographyWrapper content={this.props.content} className="box__content" />
        <div className="box__footer">
          <Button btnType="button" value="x" className="alert" />
          <Button btnType="button" value="&#x2713;" className="accept" />
          <Button btnType="button" value="i" className="info" />
          <Button btnType="button" value=">" className="more" click={this.maximilaze.bind(this)} />
          <Button btnType="button" value="<" className="less" click={this.minimalize.bind(this)} />
        </div>
      </div>
    );
  }
}

const setScale = (factor = 10) => {
  return `scale(${factor / 10})`;
};

const randomPosition = (): {top: string, left: string} => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const container: HTMLElement | null = document.querySelector('body');
  if (!container) {
    return {
      top: '0',
      left: '0'
    }
  }
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const boxWidth = containerWidth * 0.2 >= 400 ? 400 : containerWidth * 0.2;
  const boxHeight = 255;

  return {
    top: fitBox(top, boxWidth, containerWidth) + '%',
    left: fitBox(left, boxHeight, containerHeight) + '%'
  }
}
const fitBox = (position: number, boxSize: number, containerSize: number): number => {
  const percent = Math.ceil(position + (boxSize/containerSize) * 100);

  if ( percent > 100) {
    position = position - (percent - 100);
  }
  return position;
}
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
