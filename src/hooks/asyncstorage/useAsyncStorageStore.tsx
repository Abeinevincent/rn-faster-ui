import { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ReturnValue<T> = {
  value: T | null;
  storeValue: (value: T) => void;
  retrieveValue: () => void;
  removeValue: () => void;
};

export const useAsyncStorageStore = <T,>(key: string): ReturnValue<T> => {
  const [value, setValue] = useState<T | null>(null);

  const storeValue = (newValue: T) => {
    AsyncStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  const retrieveValue = useCallback(async () => {
    try {
      const storedValue = await AsyncStorage.getItem(key);
      setValue(storedValue ? JSON.parse(storedValue) : null);
    } catch (error) {
      console.error(`Error retrieving ${key}:`, error);
    }
  }, [key]);

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem(key);
      setValue(null);
    } catch (error) {
      console.error(`Error retrieving ${key}:`, error);
    }
  };

  useEffect(() => {
    retrieveValue();
  }, [retrieveValue]); // Now only retrieveValue is a dependency

  return { value, storeValue, retrieveValue, removeValue };
};
