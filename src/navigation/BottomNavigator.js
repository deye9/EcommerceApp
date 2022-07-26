import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {routes} from '../config/Route';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.HOME_PATH} component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
