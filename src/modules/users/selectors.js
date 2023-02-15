export const selectUsersState = (state) =>
  // eslint-disable-next-line no-unused-vars
  state.users.users.map(({ status, loginToken, ...user }) => user);

export const selectAuthState = (state) => state.users.isAuthorized;
