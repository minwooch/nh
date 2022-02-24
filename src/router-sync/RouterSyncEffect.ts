import { AtomEffect, RecoilState, RecoilValueReadOnly } from "recoil";
import { ListAndNotType, UrlParamsString } from "./RouterTypes";
import { urlSearchStorage } from "./searchStorage";

export const keyToRecoil: Map<
  keyof ListAndNotType,
  {
    recoilAtom: RecoilState<string>;
    recoilSelector: RecoilValueReadOnly<Set<number>>;
  }
> = new Map();

export const routerSyncEffect = (
  searchKey: keyof UrlParamsString
): AtomEffect<string> => {
  return ({ trigger, setSelf, resetSelf }) => {
    if (trigger === "get") {
      console.log('side get');
      const value = urlSearchStorage()[searchKey];
      if (typeof value !== "undefined") {
        setSelf(value);
      } else {
        resetSelf();
      }
    }
  };
};
