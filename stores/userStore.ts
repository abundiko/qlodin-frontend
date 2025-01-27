import { UserType } from "@/types/user";
import { create } from "zustand";

export type UserStoreState = {
  /** the currently logged in user */
  user: UserType | null;
  /** used to set the user */
  setUser: (user: UserType | null) => void;
};

export const useUserStore = create<UserStoreState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
