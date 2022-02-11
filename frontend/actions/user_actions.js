import * as UserUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});


// export const thunkFetchAllUsers = () => (dispatch) => {
// //   debugger
//   return UserUtil.apiFetchAllUsers().then((users) =>
//     dispatch(receiveUsers(users))
//   );
// };

export const fetchAllUsers = () => (dispatch) => {
  return UserUtil.apiFetchAllUsers().then((users) => {
    return dispatch(receiveUsers(users));
  });
};
