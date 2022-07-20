// Import React and Component
import React, {useState, createRef} from 'react';
import {
  Platform,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import route from '../../config/Route';
import {styles} from '../../assets/AppStyles';
import Loader from '../../components/Loader';
import {ValidateEmail} from '../../utils/Index';

const LoginScreen = ({navigation}) => {
  const passwordInputRef = createRef();
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [errortext, setErrortext] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');

    if (!userEmail || !ValidateEmail(userEmail)) {
      setErrortext('Please enter a valid email address');
      return;
    }

    if (!userPassword) {
      setErrortext('Please fill Password');
      return;
    }

    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext(responseJson.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <ScrollView>
        <View style={styles.centralize}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View>
            <TextInput
              value={userEmail}
              returnKeyType="next"
              blurOnSubmit={false}
              autoCapitalize="none"
              placeholder="Enter Email"
              style={styles.inputStyle}
              onChangeText={setUserEmail}
              keyboardType="email-address"
              underlineColorAndroid="#f000"
              placeholderTextColor="#8b9cb5"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
            />
          </View>
          <View>
            <TextInput
              value={userPassword}
              blurOnSubmit={false}
              returnKeyType="next"
              secureTextEntry={true}
              ref={passwordInputRef}
              keyboardType="default"
              style={styles.inputStyle}
              placeholder="Enter Password"
              underlineColorAndroid="#f000"
              onChangeText={setUserPassword}
              placeholderTextColor="#8b9cb5"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          {errortext !== '' ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <Pressable style={styles.buttonStyle} onPress={handleSubmitPress}>
            <Text style={styles.buttonTextStyle}>LOGIN</Text>
          </Pressable>
          <Text
            style={styles.registerTextStyle}
            onPress={() => navigation.navigate(route.REGISTER_PATH)}>
            New Here ? Register
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
