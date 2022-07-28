// @flow

import AsyncStorage from '@react-native-community/async-storage';


export const get = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  }
  catch (err) {
    console.log(err);
  }
};


export const set = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  }
  catch (err) {
    console.warn(err);
  }
};
  
export const remove = async (key)=> {
  try {
    const status = await AsyncStorage.removeItem(key);
    return status
  }
  catch (err) {
    console.log(err);
  }
};