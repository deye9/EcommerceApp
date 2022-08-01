import React, {useState, useEffect} from 'react';
import {View, Text, LogBox, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {DrawerItem, useDrawerStatus} from '@react-navigation/drawer';
import {useNavigation, DrawerActions} from '@react-navigation/native';

import routes from '../config/Route';
import {styles} from '../assets/AppStyles';
import {clearStorage} from '../utils/Index';
import Accordion from '../components/Accordion';
import {logout} from '../redux/auth/authActions';

export default function DrawerContainer(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [menu] = useState(routes.Accordion);
  const isDrawerOpen = useDrawerStatus() === 'open';

  // Ignore the VirtualizedLists should never be nested error
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const renderAccordions = () => {
    const items = [];
    for (let item of menu) {
      items.push(
        <Accordion title={item.title} data={item.children} key={item.key} />,
      );
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
                onPress: async () => {
                  clearStorage();
                  dispatch(logout());
                },
              },
            ],
            {cancelable: false},
          );
        }}
      />
    </View>
  );
}
