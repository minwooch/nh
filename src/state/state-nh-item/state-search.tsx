import { atom, selector } from "recoil";
import { urlSearchStorage } from "router-sync/searchStorage";

export const stateSearchSync = atom({
  key: "state-search-sync",
  default: "",
  effects: [
    ({ trigger, setSelf }) => {
      if (trigger === "get") {
        const s = urlSearchStorage()["s"];
        setSelf(s ?? "");
      }
    },
  ],
});

export const stateSearch = selector({
  key: "state-search",
  get: ({ get }) => {
    return get(stateSearchSync);
  },
});
