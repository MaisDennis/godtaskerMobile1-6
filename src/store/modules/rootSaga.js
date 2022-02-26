import { all} from 'redux-saga/effects';
import auth from './auth/sagas';
import image from './image/sagas';
import user from './user/sagas';
import worker from './worker/sagas';

export default function* rootSaga() {
  return yield all([auth, image, user, worker]);
}
