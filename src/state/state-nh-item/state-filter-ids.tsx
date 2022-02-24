import { selector } from "recoil";
import { stateFilterName } from "./state-filter-name";
import { stateNameOrder } from "./state-name-order";
import { stateNHItem } from "./state-nh-item";

export const stateFilterIds = selector({
  key: "state-filter-ids",
  get: ({ get }) => {
    const items = get(stateNHItem);
    const nameOrder = get(stateNameOrder);
    const filterName = get(stateFilterName);

    if (
      filterName === null
    ) {
      return nameOrder;
    }

    const filterIds = [];
    for (const id of nameOrder) {
      if (filterName === null || filterName.has(id)) {
        const item = items.get(id);
        if (typeof item === "undefined") {
          continue;
        }
        filterIds.push(id);
      }
    }

    return filterIds;
  },
});
