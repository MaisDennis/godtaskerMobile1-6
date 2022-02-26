import produce from 'immer';
// -----------------------------------------------------------------------------
const INITIAL_STATE = {
  profile: {},
};
// -----------------------------------------------------------------------------
export default function phonenumber(state= INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@phonenumber/SIGN_IN': {
        draft.profile = action.payload;
        break;
      }
      case '@phonenumber/SIGN_OUT' : {
        draft.profile = action.payload;
        break;
      }
      default:
    }
  });
}
