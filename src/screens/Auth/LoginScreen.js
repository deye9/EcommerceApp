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
import httpStatus from 'http-status';
import {useDispatch} from 'react-redux';

import routes from '../../config/Route';
import Loader from '../../components/Loader';
import {styles} from '../../assets/AppStyles';
import {ValidateEmail} from '../../utils/Index';
import {logIn} from '../../redux/auth/authActions';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const passwordInputRef = createRef();
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('marklyan@gmail.com');
  const [errortext, setErrortext] = useState('');
  const [userPassword, setUserPassword] = useState('simple_password');

  const handleSubmitPress = async () => {
    setErrortext('');

    if (!userEmail || !ValidateEmail(userEmail)) {
      setErrortext('Please enter a valid email address');
      return;
    }

    if (!userPassword) {
      setErrortext('Please enter a valid password');
      return;
    }

    //Show Loader
    setLoading(true);

    // Dispatch the signup action
    const response = await dispatch(
      logIn({
        email: userEmail,
        password: userPassword,
      }),
    );

    if (response.status !== httpStatus.OK) {
      setLoading(false);
      setErrortext(response.message);
      return;
    }

    // Hide Loader
    setLoading(false);

    // Redirect the user to the landing page
    navigation.navigate(routes.HOME_PATH);
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
            onPress={() => navigation.navigate(routes.REGISTER_PATH)}>
            New Here ? Register
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
