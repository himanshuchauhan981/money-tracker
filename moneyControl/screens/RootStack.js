import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Initial from './initial';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator initialRouteName="Initial">
    <RootStack.Screen
      name="Initial"
      component={Initial}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Signup"
      component={Signup}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
