import 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {styles} from '../assets/AppStyles';
import DrawerNavigator from './DrawerNavigator';
import BottomNavigator from './BottomNavigator';
import AuthNavigator from './AuthNavigator';

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
      <Drawer.Screen name="Home" component={BottomNavigator} />
    </Drawer.Navigator>
  );
};

export default function Navigation() {
  const {access_token: accessToken, refresh_token: refreshToken} = useSelector(
    state => state.authReducer?.user?.data ?? {},
  );

  return (
    <NavigationContainer>
      {/* We use == to check if accessToken and refreshToken is simply empty without checking the type */}
      {accessToken == null && refreshToken == null ? (
        <AuthNavigator />
      ) : (
        <DrawerStack />
      )}
    </NavigationContainer>
  );
}
