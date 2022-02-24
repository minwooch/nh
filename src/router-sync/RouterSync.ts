import React from "react";
import {
  useRecoilTransaction_UNSTABLE,
  useRecoilValue,
} from "recoil";
import {
  listenUrlSearchStorage,
  setUrlSearchStorageWithStrings,
  urlSearchStorage,
} from "router-sync/searchStorage";
import {
  stateCurrentPageSync,
} from "state/state-nh-item/state-current-page";
import { stateSearchSync } from "state/state-nh-item/state-search";
import { UrlParamsString } from "./RouterTypes";

export const useRouterSync = () => {
  const searchString = useRecoilValue(stateSearchSync);
  const currentPage = useRecoilValue(stateCurrentPageSync);

  const updateTransaction = useRecoilTransaction_UNSTABLE(
    ({ set }) =>
      (storage: UrlParamsString) => {
        set(stateSearchSync, storage.s ?? "");
        set(stateCurrentPageSync, storage.p ?? "");
      },
    []
  );

  const updateRecoil = React.useCallback(() => {
    const urlSearch = urlSearchStorage();
    updateTransaction(urlSearch);
  }, [updateTransaction]);

  React.useEffect(() => {
    return listenUrlSearchStorage(updateRecoil);
  }, [updateRecoil]);

  React.useEffect(() => {
    console.log("set url");
    setUrlSearchStorageWithStrings({
      s: searchString,
      p: currentPage
    });
  }, [
    searchString,
    currentPage
  ]);
};

export const RouterSync = () => {
  useRouterSync();
  return null;
};
