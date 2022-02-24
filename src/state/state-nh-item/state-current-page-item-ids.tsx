import { selector } from "recoil";
import { stateCurrentPage } from "./state-current-page";
import { stateFilterIds } from "./state-filter-ids";
import { statePageSize } from "./state-page-size";

export const stateCurrentPageItemIds = selector({
  key: "state-current-page-item-ids",
  get: ({ get }) => {
    const filterIds = get(stateFilterIds);
    const currentPage = get(stateCurrentPage);
    const pageSize = get(statePageSize);

    return filterIds.slice(
      currentPage * pageSize,
      (currentPage + 1) * pageSize
    );
  },
});
