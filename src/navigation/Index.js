import 'react-native-gesture-handler';
import React from 'react';
import { View } from "react-native"
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {styles} from '../assets/AppStyles';
import AuthNavigator from './MainNavigator';
import DrawerNavigator from './DrawerNavigator';
import BottomNavigator from './BottomNavigator';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={() => ({
        headerStyle: styles.statusBar,
      })}
      drawerPosition="left"
      backBehavior="history"
      drawerStyle={{width: '250'}}
      drawerContent={() => {
        return <DrawerNavigator />;
      }}>
      <Drawer.Screen name="Home" component={AuthNavigator} />
      <Drawer.Screen name="Bottom" component={BottomNavigator} />
    </Drawer.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}
