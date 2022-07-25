import React from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItem,
  useDrawerStatus,
} from '@react-navigation/drawer';

import Route from '../config/Route';
import {styles} from '../assets/AppStyles';
import Accordion from '../components/Accordion';

export default function DrawerContainer(props) {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';
  const menu = [
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

  const items = [];
  for (let item of menu) {
    items.push(<Accordion title={item.title} data={item.data} />);
  }
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
      <ScrollView nestedScrollEnabled={true}>{items}</ScrollView>
      {/* <Accordion title={menu[0].title} data={menu[0].data} /> */}
      <DrawerContentScrollView {...props}>
        <DrawerItem label={Route.HOME} />
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
      </DrawerContentScrollView>
    </View>
    // <View style={styles.drawerContent}>
    //   <View style={styles.drawerContainer}>
    //     <MenuButton
    //       title={Route.HOME}
    //       source={require('../assets/icons/home.png')}
    //       onPress={() => {
    //         navigation.navigate({routeName: Route.HOME_PATH});
    //       }}
    //     />
    //     <MenuButton
    //       title={Route.LOGIN}
    //       source={require('../assets/icons/category.png')}
    //       onPress={() => {
    //         navigation.navigate({routeName: Route.LOGIN_PATH});
    //       }}
    //     />
    //     <MenuButton
    //       title={Route.REGISTER}
    //       source={require('../assets/icons/search.png')}
    //       onPress={() => {
    //         navigation.navigate({routeName: Route.REGISTER_PATH});
    //       }}
    //     />
    //   </View>
    // </View>
  );
}
