import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//import Login from '../Views/Login';
//import Register from '../Views/Register';
import Welcome from '../Views/Welcome';
import Login from '../Views/Login';
import Register from '../Views/Register';
import UserHome from '../Views/UserHome';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Welcome'}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="UserHome" component={UserHome} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
