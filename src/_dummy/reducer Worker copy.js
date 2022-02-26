import produce from 'immer';
// -----------------------------------------------------------------------------
// const INITIAL_STATE = {
//   signed: false,
//   loading: false,
//   // workerId: null,
//   workerPhoneNumber: null,
//   workerData: {
//     id: 0,
//     name: 'Duff McKagen',
//     dept: "Guns n' Roses",
//     phonenumber: 11912341234,
//     phonenumber_lastfourdigits: 1234,
//     gender: 'alien',
//     worker_password: 'guns',
//     avatar_id: null,
//     user_id: 1,
//     avatar: null
//   }
// };
const INITIAL_STATE = {
  profile: false,
}
// -----------------------------------------------------------------------------
export default function worker(state= INITIAL_STATE, action) {
  // -----------------------------------------------------------------------------
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        // draft.worker_signed = true;
        // draft.loading = false;
        draft.profile = action.payload.worker;
        break;
      }
      // case '@worker/SIGN_IN_REQUEST': {
      //   draft.loading = true;
      //   break;
      // }
      // case '@worker/SIGN_IN_SUCCESS': {
      //   draft.signed = true;
      //   draft.loading = false;
      //   draft.workerPhoneNumber = action.payload.workerPhoneNumber;
      //   draft.workerData = action.payload.workerData;
      //   break;
      // }
      // case '@worker/SIGN_IN_FAILURE': {
      //   draft.loading = false;
      //   break;
      // }
      // case '@worker/SIGN_OUT' : {
      //   draft.signed = false;
      //   draft.workerData = {
      //     id: 0,
      //     name: 'Duff McKagen',
      //     dept: "Guns n' Roses",
      //     phonenumber: 11912341234,
      //     phonenumber_lastfourdigits: 1234,
      //     gender: 'alien',
      //     worker_password: 'guns',
      //     avatar_id: null,
      //     user_id: 1,
      //     avatar: null
      //     // {
      //     //   url: 'http://localhost:3333/files/fe5f5b66b83cd500c6e89e3f9bf18d62.jpeg',
      //     //   name: 'WhatsApp Image 2020-04-25 at 16.19.11.jpeg',
      //     //   path: 'fe5f5b66b83cd500c6e89e3f9bf18d62.jpeg',
      //     // }
      //   }
      //   break;
      // }
      // case '@worker/WORKER_DATA':
      //   return produce(state, draft => {
      //     draft.workerData = action.payload.workerData;
      //   });
      default:
        return state;
    }
  })
}
