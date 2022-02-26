import { takeLatest, put, all } from 'redux-saga/effects';
// -----------------------------------------------------------------------------
import { updateImageSuccess, updateImageFailure } from './actions';
// -----------------------------------------------------------------------------
export function* updateImage({ payload }) {
  try {
    const image  = payload.data;
    // console.log('Imagem atualizado com sucesso!');
    yield put(updateImageSuccess(image));

  } catch (err) {
    // console.log('Erro ao atualizar imagem!');
    yield put(updateImageFailure());
  }
}

// -----------------------------------------------------------------------------
export default all([
  takeLatest('@image/UPDATE_IMAGE_REQUEST', updateImage)
]);
