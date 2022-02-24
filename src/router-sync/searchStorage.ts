import QueryString from "qs";
import {
  listAndNotKeyList,
  noListKeyList,
  UrlParamsString,
} from "./RouterTypes";

export const urlSearchStorage = () => {
  return QueryString.parse(window.document.location.search, {
    ignoreQueryPrefix: true,
  }) as UrlParamsString;
}

export const setUrlSearchStorageWithStrings = (urlParams: UrlParamsString) => {
  let nextUrlParams: UrlParamsString = {};
  for (const key of noListKeyList) {
    const value = urlParams[key];
    if (typeof value === "string") {
      if (value.length > 0) {
        nextUrlParams[key] = value;
      }
    }
  }
  const queryString = QueryString.stringify(nextUrlParams, {
    addQueryPrefix: true,
    skipNulls: true,
  });
  if (queryString !== window.document.location.search) {
    window.history.pushState(null, "", `/${queryString}`);
  }
};

export const listenUrlSearchStorage = (callback: any) => {
  window.addEventListener("popstate", callback);
  return () => {
    window.removeEventListener("popstate", callback);
  };
};
