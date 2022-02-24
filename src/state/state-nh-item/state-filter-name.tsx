import { selector } from "recoil";
import { stateNameFullTextIndex } from "./state-name-index";
import { stateSearch } from "./state-search";

export const stateFilterName = selector({
  key: "state-filter-name",
  get: ({ get }) => {
    const search = get(stateSearch);
    const fullTextIndex = get(stateNameFullTextIndex);

    if (search.length === 0) {
      return null;
    }

    return new Set(fullTextIndex.search(search)) as Set<string>;
  },
});
