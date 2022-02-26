export function updateTasks(data) {
  return {
    type: '@task/UPDATE_TASKS',
    payload: { data },
  };
}
// export function updateUserTasks(data) {
//   return {
//     type: '@task/UPDATE_USER_TASKS',
//     payload: { data },
//   };
// }
