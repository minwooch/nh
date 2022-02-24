import { atom } from "recoil";
import { items } from "data/items";

export const stateNHItem = atom({
  key: "state-nh-item",
  default: items,
});
