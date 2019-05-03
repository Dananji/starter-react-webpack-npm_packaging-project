import React from 'react';

const ImageComponent = props => {
  return (
    <div>
      <img src={props.src} />
    </div>
  );
};

export default ImageComponent;
