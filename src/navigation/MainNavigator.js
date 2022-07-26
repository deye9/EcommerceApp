import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import routes from '../config/Route';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.HOME_PATH}
        component={HomeScreen}
        options={{title: routes.HOME}}
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

export default MainNavigator;
