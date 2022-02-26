import {persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gerenteDash',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'worker'],
    },
    reducers
  );
  return persistedReducer;
}
