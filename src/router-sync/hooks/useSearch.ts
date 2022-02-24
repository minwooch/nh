import { useRecoilTransaction_UNSTABLE, useRecoilValue } from "recoil";
import { stateCurrentPageSync } from "state/state-nh-item/state-current-page";
import { stateSearch, stateSearchSync } from "state/state-nh-item/state-search";

export const useSearch = () => {
  const searchString = useRecoilValue(stateSearch);
  const setSearchString = useRecoilTransaction_UNSTABLE(
    ({ set }) =>
      (s: string) => {
        set(stateSearchSync, s);
        set(stateCurrentPageSync, "0");
      },
    []
  );
  return [searchString, setSearchString] as const;
};
