export const selectUsersState = (state) =>
  state.users.users.map(({ status, loginToken, ...user }) => user);

export const selectAuthState = (state) => state.users.isAuthorized;