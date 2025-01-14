import { create } from "zustand";

export type GlobalStoreState = {
  /** Determines when the main sidebar should be open. */
  mainSidebarOpen: boolean;
  /** used to set the main sidebar open state */
  setMainSidebarOpen: (open: boolean) => void;
};

export const useGlobalStore = create<GlobalStoreState>((set) => ({
  mainSidebarOpen: true,
  setMainSidebarOpen: (open) => set({ mainSidebarOpen: open }),
}));
