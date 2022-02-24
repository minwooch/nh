import items_json from './items.json';

type Detail = {
  name?: string;
  internalId: string;
  url: string;
};
  
type ItemInfo = {
  name: string;
  category: number;
  details: Detail[];
  size?: number;
  source: number[];

  orderable: number;
  reform: number[];
  kit?: number;
  cyrus?: number;
};

export const items: ReadonlyMap<string, ItemInfo> = new Map<string, ItemInfo>(
  Object.entries(items_json)
);