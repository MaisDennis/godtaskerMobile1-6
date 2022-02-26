export function signInPhonenumber(phonenumber, confirm) {
  return {
    type: '@phonenumber/SIGN_IN',
    payload: { phonenumber, confirm },
  };
}

export function signOutPhonenumber(phonenumber, confirm) {
  return {
    type: '@phonenumber/SIGN_OUT',
    payload: { phonenumber, confirm },
  };
}
