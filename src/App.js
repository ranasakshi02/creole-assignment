import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavContainer from './navigation/NavContainer';
import {Provider} from 'react-redux';

import {store} from './store';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
