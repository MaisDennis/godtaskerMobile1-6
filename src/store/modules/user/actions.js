export function updateProfileRequest({
  first_name, last_name, email, instagram, linkedin, bio, image,
}) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: {
      first_name,
      last_name,
      email,
      instagram,
      linkedin,
      bio,
      image,
    },
  };
}
export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}
export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
  };
}
