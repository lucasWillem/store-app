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
