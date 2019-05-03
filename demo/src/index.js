import React from 'react';
import { render } from 'react-dom';
import Root from '../../src';

const props = {
  src: 'https://i.ytimg.com/vi/xCGPPimXgJU/maxresdefault.jpg',
  anotherProp: 123456789
};

render(<Root {...props} />, document.getElementById('root'));
