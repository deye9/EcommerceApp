import React, {useState, useEffect} from 'react';
import {View, Text, Alert, LogBox} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItem,
  useDrawerStatus,
} from '@react-navigation/drawer';

import routes from '../config/Route';
import {styles} from '../assets/AppStyles';
import Accordion from '../components/Accordion';

export default function DrawerContainer(props) {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';
  const [menu] = useState(routes.Accordion);

  // Ignore the VirtualizedLists should never be nested error
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const renderAccordions = () => {
    const items = [];
    for (let item of menu) {
      items.push(<Accordion title={item.title} data={item.children} />);
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
      <DrawerContentScrollView {...props}>
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
      </DrawerContentScrollView>
    </View>
  );
}
