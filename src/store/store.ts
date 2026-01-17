import { create } from "zustand";
import { devtools } from "zustand/middleware";

// slices
import { AuthSlice, type AuthSliceType } from "./slices/auth/auth.slice";

// store type
export type StoreType = AuthSliceType;

// create store
export const useStore = create<StoreType>()(
  devtools((...args) => ({
    ...AuthSlice(...args),
  })),
);
