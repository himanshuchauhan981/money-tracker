import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Initial from './initial';
import Login from './Login';
import Signup from './Signup';
import DrawerContent from './DrawerContent';
import Home from './Home';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import ResetPassword from './ForgetPassword/ResetPassword';
import PasswordSuccess from './ForgetPassword/PasswordSuccess';
import ExpenseIncomeScreen from './AddExpense/ExpenseIncomeScreen';
import Calculator from './Calculator/Calculator';

const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Initial" component={Initial} />
    </Drawer.Navigator>
  );
};

const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName="Home">
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
      component={DrawerStack}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="ForgetPassword"
      component={ForgetPassword}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="ResetPassword"
      component={ResetPassword}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="PasswordSuccess"
      component={PasswordSuccess}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Add"
      component={ExpenseIncomeScreen}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Calculator"
      component={Calculator}
      options={{headerShown: false}}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
