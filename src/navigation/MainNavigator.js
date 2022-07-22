import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import route from '../config/Route';
import {styles} from '../assets/AppStyles';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={styles.headerTitleStyle}
      initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={route.HOME_PATH}
        component={HomeScreen}
        options={{title: route.HOME}}
      />
      <Stack.Screen
        name={route.LOGIN_PATH}
        component={LoginScreen}
        options={{title: route.LOGIN}}
      />
      <Stack.Screen
        name={route.REGISTER_PATH}
        component={RegistrationScreen}
        options={{title: route.REGISTER}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
