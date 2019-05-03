import React, { Component } from 'react';
import './App.css';
import ImageComponent from './components/ImageComponent';

// Font Awesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faPen, faSave, faTrash);

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Bootstrap Logo</h1>
        <ImageComponent {...this.props} />
      </div>
    );
  }
}

export default App;
