import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {styles} from '../assets/AppStyles';
import DrawerNavigator from './DrawerNavigator';
import BottomNavigator from './BottomNavigator';
import MainNavigator from './MainNavigator';
import {getItemFromStorage} from '../utils/Index';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  const [accessToken, setaccessToken] = useState();
  const [refreshToken, setrefreshToken] = useState();

  const getAccessToken = async () => {
    const response = await getItemFromStorage('access_token');
    setaccessToken(response);
  };

  const getRefreshToken = async () => {
    const response = await getItemFromStorage('refresh_token');
    setrefreshToken(response);
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  useEffect(() => {
    getRefreshToken();
  }, []);

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
      <Drawer.Screen
        name="Home"
        component={
          accessToken === null && refreshToken === null
            ? MainNavigator
            : BottomNavigator
        }
      />
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
