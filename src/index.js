import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './App';
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from "./theme";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from "./store";
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(< React.StrictMode >
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store = {store} >
      <PersistGate loading={null} persistor={persistStore(store)}>
    <App />
    </PersistGate>
    </Provider>
  </ThemeProvider>

</React.StrictMode>,
  document.getElementById('root')
);