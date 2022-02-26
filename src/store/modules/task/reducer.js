import produce from 'immer';
// -----------------------------------------------------------------------------
const INITIAL_STATE = {
  tasks: {},
  // user_tasks: {},
};
// -----------------------------------------------------------------------------
export default function message(state= INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@task/UPDATE_TASKS': {
        draft.tasks = action.payload;
        break;
      }
      // case '@task/UPDATE_USER_TASKS': {
      //   draft.user_tasks = action.payload;
      //   break;
      // }
      default:
    }
  });
}
