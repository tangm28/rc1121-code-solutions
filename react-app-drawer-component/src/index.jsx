import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer';

const MENUOPTIONS = [{ title: 'About' }, { title: 'Get Started' }, { title: 'Sign In' }];

ReactDOM.render(
  <AppDrawer menuOptions={MENUOPTIONS}/>,
  document.querySelector('#root')
);
