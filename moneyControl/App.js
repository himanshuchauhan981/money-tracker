import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Initial from './screens/initial';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import DrawerContent from './screens/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Initial"
          component={Initial}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
