import React from 'react';
import './TypographyWrapper.css';

interface TypographyWrapperProps {
  content: string,
  className?: string,
}

const TypographyWrapper = (props: TypographyWrapperProps): JSX.Element => {
  return (
    <div className={`${props.className} typography`}
         dangerouslySetInnerHTML={createMarkup(props.content)}
    >
    </div>
  )
};

function createMarkup(html: string) {
  return {__html: html};
}

export default TypographyWrapper;
