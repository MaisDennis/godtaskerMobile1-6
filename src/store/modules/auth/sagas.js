import { takeLatest, call, put, all} from 'redux-saga/effects';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
// -----------------------------------------------------------------------------
// import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure, signUpSuccess, signUpFailure } from './actions';
// -----------------------------------------------------------------------------
export function* signIn({ payload }) {
  // console.log(payload)

  try {
    const {
      email,
      password
    } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
    });

    const { token, user } = response.data;

    console.log(response.data)

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const responseWorkers = yield call(api.get, 'workers/mobile', {
      params: { test: '' },
    });

    const worker = responseWorkers.data.find(
      w => w.email == email
    );


    yield put(signInSuccess(token, user, worker));
    console.log('signed in')

  } catch (error) {
    yield put(signFailure());
    // console.log(error)
    Alert.alert('Invalid Data. Please check password')
  }
}
// -----------------------------------------------------------------------------
// export function setToken({payload }) {
//   if(!payload) return;
//   const { token } = payload.auth;
//   if (token) {
//     api.defaults.headers.Authorization = `Bearer ${token}`;
//   }
// }
// -----------------------------------------------------------------------------
export function* signUp({ payload }) {
  try {
    const {
      user_name,
      password,
      email,
    } = payload;

    // console.log(payload)

    const bio = `Hello, my Username is ${user_name}`

    const response = yield call(api.post, 'users', {
      user_name,
      worker_name: user_name,
      password,
      email,
      bio,
      points: 0,
      subscriber: false
    })

    // console.log(response.config.data.email)

    if (response.data.code === 'auth/email-already-in-use') {
      // console.log(response.data.code)
      // yield put(signUpFailure(response.data.message));
      Alert.alert(
        'e-mail already in use',
        `${response.data.message}`
      )

    } else if (response.data.code === 'auth/invalid-email') {
      // console.log(response.data.code)
      // yield put(signUpFailure(response.data.message));
      Alert.alert(
        'Invalid e-mail',
        `${response.data.message}`
      )
    } else {
      const user = user_name;
      yield put(signUpSuccess(user));
      Alert.alert(
        'Thank you for signing up!',
        `An e-mail has been sent to ${email}. Please confirm your e-mail to activate account.`
      )
    }
  }
  catch (error) {
    console.log(error)
    Alert.alert(
      'Error: Sign up failed',
      'e-mail address or phonenumber may already exist. Please contact support.'
    )
  }
}

// -----------------------------------------------------------------------------
export function signOnOut() {
  // history.push('/');
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}
// -----------------------------------------------------------------------------
export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOnOut),
]);
