import React, { useState } from 'react';
import './zoom.css';

type Props = {
  onZoomChange: any;
}
const Zoom = (props: Props): JSX.Element => {
  const [zoomValue, setZoomValue] = useState(0);

  const updateZoomValue = (e: any) => {
    setZoomValue(e.target.value);
    props.onZoomChange(e.target.value);
  }
  return (
    <div id="zoomer">
      <span>{zoomValue}</span>
      <input type="range" value={zoomValue} min='0' max="9" step="1" onChange={updateZoomValue}/>
    </div>
  )
};

export default Zoom;
