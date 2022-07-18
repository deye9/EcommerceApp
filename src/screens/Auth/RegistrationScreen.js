// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  Platform,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {styles} from '../../assets/AppStyles';
import Loader from '../../components/Loader';
import {FetchData, ValidateEmail} from '../../utils/Index';

const RegistrationScreen = props => {
  const emailInputRef = createRef();
  const passwordInputRef = createRef();
  const phoneNumberInputRef = createRef();
  const passwordRepeatInputRef = createRef();

  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [errortext, setErrortext] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const handleSubmitButton = async () => {
    setErrortext('');

    if (!userName) {
      setErrortext('Please fill in your Full Name');
      return;
    }

    if (!userEmail || !ValidateEmail(userEmail)) {
      setErrortext('Please enter a valid email address');
      return;
    }

    if (!phoneNumber) {
      setErrortext('Please enter a valid Phone Number');
      return;
    }

    if (!userPassword) {
      setErrortext('Please enter a valid password');
      return;
    }

    if (!passwordRepeat) {
      setErrortext('Please enter a valid password');
      return;
    }

    //Show Loader
    setLoading(true);

    const response = await FetchData('auth/register', 'POST', {
      name: userName,
      email: userEmail,
      number: phoneNumber,
      password: userPassword,
      password_repeat: passwordRepeat,
    });

    if (response.status === 201) {
      setLoading(true);
      setIsRegistraionSuccess(true);
    } else {
      setLoading(false);
      setErrortext(response.message);
    }
  };

  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/images/success.png')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Text style={styles.successTextStyle}>Registration Successful</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
              style={styles.inputStyle}
              onChangeText={UserName => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                phoneNumberInputRef.current &&
                phoneNumberInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputStyle}
              onChangeText={PhoneNumber => setPhoneNumber(PhoneNumber)}
              underlineColorAndroid="#f000"
              placeholder="Enter Phone Number"
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
              ref={phoneNumberInputRef}
              returnKeyType="next"
              textContentType="telephoneNumber"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                passwordRepeatInputRef.current &&
                passwordRepeatInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>

          <View>
            <TextInput
              style={styles.inputStyle}
              onChangeText={PasswordRepeat => setPasswordRepeat(PasswordRepeat)}
              underlineColorAndroid="#f000"
              placeholder="Enter Password Again"
              placeholderTextColor="#8b9cb5"
              ref={passwordRepeatInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext !== '' ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegistrationScreen;
