import AsyncStorage from '@react-native-community/async-storage';

export const ValidateEmail = email => {
  if (/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    return true;
  }
  return false;
};

export const saveDataToStorage = (key, value) => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};
