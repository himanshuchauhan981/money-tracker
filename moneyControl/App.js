import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './screens/Home';
import DrawerContent from './screens/DrawerContent';
import RootStackScreen from './screens/RootStack';
import Initial from './screens/initial';

const Drawer = createDrawerNavigator();

let check_user_token = async () => {
  let token = await AsyncStorage.getItem('token');
  if (token) return true;
  else return false;
};

const App = () => {
  let validateToken = check_user_token();
  return (
    <NavigationContainer>
      {!validateToken ? (
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
  );
};

export default App;
