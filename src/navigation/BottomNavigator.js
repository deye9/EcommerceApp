import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {styles} from '../assets/AppStyles';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        headerStyle: styles.statusBar,
      })}>
      <Tab.Screen name="Help" component={Search} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Search} />
      <Tab.Screen name="Logout" component={Search} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
