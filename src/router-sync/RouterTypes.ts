export const NoListTypes = {
  s: {} as string,
  p: {} as number,
};

export const noListKeyList = Object.keys(NoListTypes) as Array<keyof NoListType>;

export const noListKeys = new Set(noListKeyList);

export type NoListType = Partial<typeof NoListTypes>;

export const ListTypes = {
  category: {} as number[],
  size: {} as number[],
  source: {} as number[],
  orderable: {} as number[],
  reform: {} as number[],
};

export type ListType = Partial<typeof ListTypes>;

export type ListNotType = {
  [k in keyof ListType as `${k}_n`]: number[];
};

export const listKeyList = Object.keys(ListTypes) as Array<keyof ListType>;

export const listKeys = new Set(listKeyList);

export const ListNotTypes = listKeyList.reduce((ret, k) => {
  ret[`${k}_n`] = ListTypes[k];
  return ret;
}, {} as ListNotType);

export const listNotKeyList = Object.keys(ListNotTypes) as Array<keyof ListNotType>;

export type ListAndNotType = ListType & ListNotType;

export const listAndNotKeyList = (listKeyList as Array<keyof ListAndNotType>).concat(
  listNotKeyList
);

export type UrlParams = NoListType & ListAndNotType;

export type RUrlParams = Required<UrlParams>;

export type UrlParamsString = {
  [key in keyof UrlParams]: string;
};
