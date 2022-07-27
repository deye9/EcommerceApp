import AsyncStorage from '@react-native-community/async-storage';

export const ValidateEmail = email => {
  if (/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    return true;
  }
  return false;
};

export const saveDataToStorage = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const getItemFromStorage = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const removeFromStorage = key => {
  try {
    return AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const clearStorage = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
