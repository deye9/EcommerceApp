import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContainer from '../navigation/DrawerContainer';
import MainNavigator from '../navigation/MainNavigator';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      backBehavior="history"
      drawerStyle={{width: '250'}}
      screenOptions={{headerShown: false}}
      drawerContent={() => {
        return <DrawerContainer />;
      }}>
      <Drawer.Screen name="Home" component={MainNavigator} />
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
