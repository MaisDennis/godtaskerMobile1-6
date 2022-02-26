export function signInRequest(
  email,
  password
) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password
    },
  };
}
// -----------------------------------------------------------------------------
export function signInSuccess(token, user, worker) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, user, worker },
  };
};
// -----------------------------------------------------------------------------
export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  }
};
// -----------------------------------------------------------------------------
export function signUpRequest(
  user_name,
  password,
  email,
) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      user_name,
      password,
      email,
    },

  }
}

export function signUpSuccess(user) {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
    payload: {user},
  };
};

export function signUpToggleOut(message) {
  return {
    type: '@auth/SIGN_UP_TOGGLEOUT',
    payload: {message},
  }
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  }
}
