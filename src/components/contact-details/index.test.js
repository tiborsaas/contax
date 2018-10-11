import React from 'react';
import ReactDOM from 'react-dom';
import ContactDetails from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
