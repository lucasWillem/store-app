import { useStoreState } from "@/redux";

export const useCheckIfLoggedIn = (): boolean => {
  const user = useStoreState((state) => state.user.user);
  return !!user;
};
