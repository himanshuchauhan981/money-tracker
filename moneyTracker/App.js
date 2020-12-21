import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import RootStackScreen from './screens/RootStack';
import rootReducers from './reducers';

const store = createStore(rootReducers);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
