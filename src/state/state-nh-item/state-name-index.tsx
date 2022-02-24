import * as FlexSearch from "flexsearch";
import { selector } from "recoil";
import { stateNHItem } from "./state-nh-item";

export const stateNameFullTextIndex = selector({
  key: "state-name-fulltext-index",
  get: ({ get }) => {
    const items = get(stateNHItem);
    const index = new FlexSearch.Index({
      encode: false,
      tokenize: "full",
    });

    items.forEach((v, k) => {
      index.add(k, v.name.replace(/\s+/g, ""));
    });

    return index;
  },
});
