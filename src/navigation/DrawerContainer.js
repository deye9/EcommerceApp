import React, {useState, useEffect} from 'react';
import {View, Text, Alert, LogBox} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItem,
  useDrawerStatus,
} from '@react-navigation/drawer';

import Route from '../config/Route';
import {styles} from '../assets/AppStyles';
import Accordion from '../components/Accordion';

const initialMenu = [
  {
    title: 'Non Veg Biryanis',
    data: [
      {key: 'Chicken Biryani', value: false},
      {key: 'Mutton Biryani', value: false},
      {key: 'Prawns Biryani', value: false},
    ],
  },
  {
    title: 'Pizzas',
    data: [
      {key: 'Chicken Dominator', value: false},
      {key: 'Peri Peri Chicken', value: false},
      {key: 'Indie Tandoori Paneer', value: false},
      {key: 'Veg Extraveganza', value: false},
    ],
  },
  {
    title: 'Drinks',
    data: [
      {key: 'Cocktail', value: false},
      {key: 'Mocktail', value: false},
      {key: 'Lemon Soda', value: false},
      {key: 'Orange Soda', value: false},
    ],
  },
  {
    title: 'Deserts',
    data: [
      {key: 'Choco Lava Cake', value: false},
      {key: 'Gulabjamun', value: false},
      {key: 'Kalajamun', value: false},
      {key: 'Jalebi', value: false},
    ],
  },
];

export default function DrawerContainer(props) {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';
  const [menu] = useState(initialMenu);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const renderAccordions = () => {
    const items = [];
    for (let item of menu) {
      items.push(<Accordion title={item.title} data={item.data} />);
    }
    return items;
  };

  return (
    <View style={styles.sideMenuContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {'About React'.charAt(0)}
          </Text>
        </View>
        <Text style={styles.profileHeaderText}>About React</Text>
      </View>
      <View style={styles.profileHeaderLine} />
      <DrawerContentScrollView {...props}>
        <DrawerItem label={Route.HOME} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        {renderAccordions()}
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
      </DrawerContentScrollView>
    </View>
  );
}
