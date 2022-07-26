import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {styles} from '../assets/AppStyles';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="SplashScreen"
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

{
  /* <DrawerContentScrollView {...props}>
<DrawerItem label={routes.HOME} style={styles.errorTextStyle} />
<DrawerItem label="Help" onPress={() => alert('Link to help')} />
<DrawerItem
  label="Logout"
  onPress={() => {
    if (isDrawerOpen) {
      navigation.dispatch(DrawerActions.toggleDrawer());
    }
    Alert.alert(
      'Logout',
      'Are you sure? You want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            // AsyncStorage.clear();
            props.navigation.replace('Auth');
          },
        },
      ],
      {cancelable: false},
    );
  }}
/>
</DrawerContentScrollView> */
}
