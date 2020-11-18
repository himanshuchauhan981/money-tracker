import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import Initial from './initial';
import Login from './Login';
import Signup from './Signup';
import DrawerContent from './DrawerContent';
import Home from './Home';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import ResetPassword from './ForgetPassword/ResetPassword';
import PasswordSuccess from './ForgetPassword/PasswordSuccess';
import ExpenIncomeScreen from './AddExpense/ExpenseIncomeScreen';

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

const RootStackScreen = (props) => (
  <RootStack.Navigator initialRouteName="Add">
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
      component={ExpenIncomeScreen}
      options={{
        headerLeft: () => (
          <EntypoIcon
            name="chevron-left"
            size={30}
            color="white"
            onPress={() => console.log(props)}
          />
        ),
        headerBackTitle: 'Back',
        headerLeftContainerStyle: {
          marginLeft: 10,
        },
        title: 'Add',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#93278F',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
