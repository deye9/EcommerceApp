/* eslint-disable react-native/no-inline-styles */
// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';

import route from '../config/Route';
import {styles} from '../assets/AppStyles';
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication {Login Screen}
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then(value =>
        navigation.replace(value === null ? route.LOGIN_PATH : route.HOME_PATH),
      );
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#fff"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;
