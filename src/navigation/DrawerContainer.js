import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Route from '../config/Route';
import MenuButton from '../components/MenuButton';
import {styles} from '../assets/AppStyles';

export default function DrawerContainer(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.drawerContent}>
      <View style={styles.drawerContainer}>
        <MenuButton
          title={Route.HOME}
          source={require('../assets/icons/home.png')}
          onPress={() => {
            navigation.navigate({routeName: Route.HOME_PATH});
          }}
        />
        <MenuButton
          title={Route.LOGIN}
          source={require('../assets/icons/category.png')}
          onPress={() => {
            navigation.navigate({routeName: Route.LOGIN_PATH});
          }}
        />
        <MenuButton
          title={Route.REGISTER}
          source={require('../assets/icons/search.png')}
          onPress={() => {
            navigation.navigate({routeName: Route.REGISTER_PATH});
          }}
        />
      </View>
    </View>
  );
}
