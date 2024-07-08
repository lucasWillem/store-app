import { useStoreState } from "@/redux";

/**
 * A custom hook that checks if a user is currently logged in.
 *
 * This hook utilizes the `useStoreState` hook from the application's Redux store
 * to access the current user state. It returns a boolean value indicating whether
 * a user object exists in the state, which implies that the user is logged in.
 *
 * @returns {boolean} True if a user is logged in, false otherwise.
 */

export const useCheckIfLoggedIn = (): boolean => {
  const user = useStoreState((state) => state.user.user);
  return !!user;
};
