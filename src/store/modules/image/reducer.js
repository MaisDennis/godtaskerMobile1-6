import produce from 'immer';
// -----------------------------------------------------------------------------
const INITIAL_STATE = {
  image: null,
};
// -----------------------------------------------------------------------------
export default function (state= INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.image = null;
        break;
      }
      case '@image/UPDATE_IMAGE_SUCCESS': {
        draft.image = action.payload.image;
        break;
      }
      case '@image/SIGN_OUT' : {
        draft.image = null;
        break;
      }
      case '@auth/SIGN_OUT' : {
        draft.image = {};
        break;
      }
      default:
    }
  });
}
