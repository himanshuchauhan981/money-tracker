import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import RootStackScreen from './screens/RootStack';
import rootReducers from './reducers';

const store = createStore(rootReducers);

let check_user_token = async () => {
  let token = await AsyncStorage.getItem('token');
  if (token === null) return false;
  else return true;
};

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
