import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search from '../screens/Search';
import {styles} from '../assets/AppStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        headerStyle: styles.statusBar,
      })}>
      <Tab.Screen
        name="Help"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              size={20}
              name="search"
              icon={['fas', 'magnifying-glass']}
              color={focused ? '#915159' : '#C4C4C4'}
            />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Search</Text>,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              size={20}
              name="cart"
              icon={['fas', 'cart-shopping']}
              color={focused ? '#915159' : '#C4C4C4'}
            />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Cart</Text>,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              size={20}
              name="profile"
              icon={['fas', 'user']}
              color={focused ? '#915159' : '#C4C4C4'}
            />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Profile</Text>,
        }}
      />
      <Tab.Screen
        name="Logout"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              size={20}
              name="logout"
              icon={['fas', 'person-walking-dashed-line-arrow-right']}
              color={focused ? '#915159' : '#C4C4C4'}
            />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Log Out</Text>,
        }}/>
    </Tab.Navigator>
  );
};

export default BottomNavigator;
