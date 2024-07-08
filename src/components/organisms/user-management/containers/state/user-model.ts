import { Action, action } from "easy-peasy";

interface User {
  id: number;
  username: string;
  jwt: string;
}

export interface UserModel {
  user?: User;
  storeUser: Action<UserModel, User>;
  logout: Action<UserModel>;
}

/**
 * Defines the model for managing user state within an application using the Easy Peasy state management library.
 * This model includes the structure for user data and actions to store user information and handle logout.
 *
 * Interfaces:
 * - `User`: Represents the structure of a user's data, including their id, username, and JWT token.
 *
 * The `UserModel` interface:
 * - `user`: An optional `User` object representing the currently logged-in user. It is `undefined` when no user is logged in.
 * - `storeUser`: An action for storing user information in the state. It takes a `User` object as a payload.
 * - `logout`: An action for clearing the user information from the state, effectively logging the user out.
 *
 * The `userModel` object:
 * - Implements the `UserModel` interface.
 * - Initializes `user` as `undefined` to indicate no user is initially logged in.
 * - Defines `storeUser` as an action that updates the `user` state with the provided `User` object.
 * - Defines `logout` as an action that sets the `user` state to `undefined`, effectively logging the user out.
 *
 * Usage:
 * - Import the `userModel` into your store configuration.
 * - Access and modify the user state using the `storeUser` and `logout` actions within your application's components.
 */

const userModel: UserModel = {
  user: undefined,
  storeUser: action((state, payload) => {
    state.user = payload;
  }),
  logout: action((state) => {
    state.user = undefined;
  }),
};

export default userModel;
