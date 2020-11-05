import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Home from './screens/Home';
import DrawerContent from './screens/DrawerContent';
import RootStackScreen from './screens/RootStack';
import Initial from './screens/initial';
import rootReducers from './reducers';

const store = createStore(rootReducers);
const Drawer = createDrawerNavigator();

let check_user_token = async () => {
  let token = await AsyncStorage.getItem('token');
  if (token === null) return false;
  else return true;
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {check_user_token() ? (
          <RootStackScreen />
        ) : (
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Initial" component={Initial} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
