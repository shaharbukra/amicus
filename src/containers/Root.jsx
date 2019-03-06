import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import Layout from '../containers/Layout'

const Root = () => (
  <Provider store={configureStore}>
    <Layout />
  </Provider>
);


export default Root;