export function updateImageRequest(data) {
  return {
    type: '@image/UPDATE_IMAGE_REQUEST',
    payload: { data },
  };
}
export function updateImageSuccess(image) {
  return {
    type: '@image/UPDATE_IMAGE_SUCCESS',
    payload: { image },
  };
}
export function updateImageFailure() {
  return {
    type: '@image/UPDATE_IMAGE_FAILURE',
  };
}
export function imageSignOut() {
  return {
    type: '@image/SIGN_OUT',
  };
}
