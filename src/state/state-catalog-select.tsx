import { atomFamily } from "recoil";

export const stateCatalog = atomFamily({
  key: "state-catalog",
  default: new Set<string>(),
});
