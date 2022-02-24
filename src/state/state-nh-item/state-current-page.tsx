import { atom, selector } from "recoil";
import { routerSyncEffect } from "router-sync/RouterSyncEffect";

export const stateCurrentPageSync = atom({
  key: "state-current-page-sync",
  default: "0",
  effects: [
    routerSyncEffect("p")
  ],
});

export const stateCurrentPage = selector<number>({
  key: "state-current-page",
  get: ({ get }) => {
    return parseInt(get(stateCurrentPageSync)) || 0;
  },
  set: ({ set }, newValue) => {
    set(stateCurrentPageSync, newValue.toString());
  },
});
