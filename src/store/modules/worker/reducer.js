import produce from 'immer';
// -----------------------------------------------------------------------------
const INITIAL_STATE = {
  // workerData: null,
  profile: null,
}
// -----------------------------------------------------------------------------
export default function worker(state= INITIAL_STATE, action) {
  // -----------------------------------------------------------------------------
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.worker;
        break;
      }
      case '@auth/SIGN_OUT' : {
        draft.profile = {};
        break;
      }
      default:
        return state;
    }
  })
}
