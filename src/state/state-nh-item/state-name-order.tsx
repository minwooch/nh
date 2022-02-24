import { nameIndex } from "data/name_index";
import { atom } from "recoil";

export const stateNameOrder = atom({
  key: "state-name-order",
  default: nameIndex,
});
