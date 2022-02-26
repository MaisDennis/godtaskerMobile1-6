import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
// -----------------------------------------------------------------------------
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';
// -----------------------------------------------------------------------------
export function* updateProfile({ payload }) {
  try {
    const {
      first_name,
      last_name,
      email,
      instagram,
      linkedin,
      bio,
      image,
    } = payload;
    // console.log(payload)

    let response = null
    let responseWorker= null;

    if (!image) {
      response = yield call(api.put, 'users/no-photo', {
        first_name,
        last_name,
        email,
        instagram,
        linkedin,
        bio,
      });
      responseWorker = yield call(api.put, 'workers/no-photo', {
        first_name,
        last_name,
        email,
        instagram,
        linkedin,
        bio,
      });
    } else {
      const imageResponse = yield call(api.get, 'files', {
        params: { image },
      })
      const avatar_id = imageResponse.data[0].id

      response = yield call(api.put, 'users', {
        first_name,
        last_name,
        email,
        avatar_id
      });
      console.log('user with photo sagas')

      responseWorker = yield call(api.put, 'workers', {
        first_name,
        last_name,
        email,
        avatar_id,
      });
    }
    Alert.alert('Profile update success!');
      // console.log(response.data);
    yield put(updateProfileSuccess(response.data));

  } catch (error) {
    console.log(error)
    Alert.alert('Profile update error');

    // Alert.alert(error.data.error);
    // yield put(updateProfileFailure());
  }
}
// -----------------------------------------------------------------------------
export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);
