import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as RouteProvider } from "react-router-dom"
import MainContext from './Context/MainContext';
import Router from './Router/Router';
import { store } from './Store/store';
import "./style/styles.scss"

ReactDOM.render(
  <React.StrictMode>
    <RouteProvider>
      <MainContext>
        <StoreProvider store={store}>
        <Router/>
        </StoreProvider>
      </MainContext>
    </RouteProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
