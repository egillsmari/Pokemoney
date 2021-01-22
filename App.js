import React from 'react';
import AppContainer from './src/routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Scanner from './src/views/Scanner';

//import { Provider, connect } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
//import reducers from './src/reducers';

export default function App() {
  return (
        //<Provider store={ createStore(reducers, applyMiddleware(thunk)) }>
            <AppContainer/>
        //</Provider>
  );
}
