import produce from 'immer';
// -----------------------------------------------------------------------------
const INITIAL_STATE = {
  profile: {},
};
// -----------------------------------------------------------------------------
export default function contact(state= INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@contact/UPDATE_CONTACTS': {
        draft.profile = action.payload;
        break;
      }
      default:
    }
  });
}
