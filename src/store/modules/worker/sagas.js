
// import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
// import { Alert } from 'react-native';
// import { StackNavigationOptions } from '@react-navigation/stack'
// // -----------------------------------------------------------------------------
// import api from '~/services/api';
// // import { signInSuccess, signFailure, signOut } from './actions';
// // -----------------------------------------------------------------------------

// export function* signIn({ payload }) {
//   const { workerPhoneNumber, workerPassword } = payload;

//   const responseWorkers = yield call(api.get, 'workers/mobile', {
//     params: { test: '' },
//   });

//   const workerData = responseWorkers.data.find(
//     w => w.phonenumber == workerPhoneNumber
//   );

//   if (workerData && workerData.worker_password == workerPassword) {
//     yield put(signInSuccess(workerPhoneNumber, workerData));
//   } else {
//     yield put(signFailure());
//     Alert.alert(
//       'Erro no login, verifique os dados.'
//     );
//   }
// }
// // -----------------------------------------------------------------------------
// export default all([
//   takeLatest('@worker/SIGN_IN_REQUEST', signIn),
//   // takeLatest('@worker/SIGN_OUT', signOut),
// ]);
