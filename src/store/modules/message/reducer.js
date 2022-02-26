import produce from 'immer';
// -----------------------------------------------------------------------------
const INITIAL_STATE = {
  profile: {},
  forward_message: {},
  inverted: {},
  userData: {},
  workerData: {},
};
// -----------------------------------------------------------------------------
export default function message(state= INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@message/UPDATE_MESSAGES_REQUEST': {
        draft.profile = action.payload;
        break;
      }
      case '@message/UPDATE_FORWARD_MESSAGE': {
        draft.forward_message = action.payload;
        break;
      }
      case '@message/UPDATE_CHAT_INFO': {
        draft.inverted = action.payload.inverted;
        draft.userData = action.payload.userData;
        draft.workerData = action.payload.workerData;

        break;
      }
      default:
    }
  });
}
