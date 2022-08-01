import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import routes from '../config/Route';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.LOGIN_PATH}
        component={LoginScreen}
        options={{title: routes.LOGIN}}
      />
      <Stack.Screen
        name={routes.REGISTER_PATH}
        component={RegistrationScreen}
        options={{title: routes.REGISTER}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
