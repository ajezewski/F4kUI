import React, { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd'
import './box.css';
import { ItemTypes } from '../constants';
import { default as TypographyWrapper } from '../TypographyWrapper';
import { default as Button } from '../button/Button';

interface BoxState {
  top: string;
  left: string;
  priority: number;
  className: string[];
}

interface BoxProps {
  id: string;
  tags: string[];
  title: string;
  priority: string;
  content: string;
  zoom: string;
}

const Box = (props: BoxProps): JSX.Element => {
  const { top, left } = randomPosition();
  const priority = parseInt(props.priority);
  const [boxState, setBoxState] = useState<BoxState>({
    top,
    left,
    priority,
    className: ['box__wrapper']
  })

  useEffect(() => {
    setBoxState((currentState) => ({
      ...currentState,
      priority: parseInt(props.zoom) + parseInt(props.priority)
    }));
    setZoomClass(boxState.priority);
  }, [props.zoom, props.priority, boxState.priority]);

  const [, drag] = useDrag(() => {
    return {
      type: ItemTypes.BOX,
      item: {
        updatePosition: (top: string, left: string) => {
          setBoxState(currentState => ({
            ...currentState,
            top,
            left
          }))
        }
       }
    }
  })

  const setZoomClass = (zoom: number):void => {
    const newClasses = zoom > 10 ? addCssClass('fadeOut', boxState.className) : removeCssClass('fadeOut', boxState.className);
    setBoxState((currentState: BoxState) => ({
      ...currentState,
      className: newClasses
    }))
  }

  const calculateStyle = () => {
    const priority = boxState.priority || parseInt(props.priority);

    return {
      top: boxState.top,
      left: boxState.left,
      transform: boxState.priority >= 10 ? 'none' : setScale(boxState.priority),
      opacity: priority >= 8 ? '1' : (priority + 2)/10
    }
  }

  const handleUpdate = (e:any) => {
    // const value: number = parseInt(e.target.value);
    // setPriority(value);
  }

  const maximilaze = () => {
    setBoxState((currentState => ({
      ...currentState,
      className: addCssClass('fullMode', currentState.className)
    })))
  }

  const minimalize = () => {
    setBoxState((currentState => ({
      ...currentState,
      className: removeCssClass('fullMode',currentState.className)
    })))
  }

  return (
    <div ref={drag} id={props.id} style={calculateStyle()} className={boxState.className.join(' ')}>
      <BoxHeader
        title={props.title}
        priority={props.priority}
        handleUpdate={handleUpdate}
        />
      <TypographyWrapper content={props.content} className="box__content" />
      <div className="box__footer">
        <Button btnType="button" value="x" className="alert" />
        <Button btnType="button" value="&#x2713;" className="accept" />
        <Button btnType="button" value="i" className="info" />
        <Button btnType="button" value=">" className="more" click={maximilaze} />
        <Button btnType="button" value="<" className="less" click={minimalize} />
      </div>
    </div>
  );
}

const addCssClass = (className: string, classes: string[]): string[] => {
  if (classes.indexOf(className) === -1) {
    classes.push(className)
  }
  return [...classes];
}

const removeCssClass = (className: string, classes: string[]): string[] => {
  const index = classes.indexOf(className);
  if (index > -1) {
    classes.splice(index, 1);
  }
  return [...classes];
}

const setScale = (factor = 10) => {
  return `scale(${factor / 10})`;
};

const randomPosition = (): {top: string, left: string} => {
  const top = Math.round(Math.random() * 100);
  const left = Math.round(Math.random() * 100);
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

const BoxHeader = (properties: any): JSX.Element => {
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

export default Box;
