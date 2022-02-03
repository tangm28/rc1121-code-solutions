import React from 'react';
import ReactDOM from 'react-dom';

const newHeader = React.createElement(
  'h1', null, 'Hello World'
);

ReactDOM.render(
  newHeader,
  document.getElementById('root')
);
