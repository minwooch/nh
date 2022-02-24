export const stringToArray = (str: string) => {
  return str.split("_");
};

export const arrayToString = (array: string[] | number[]) => {
  return array.join("_");
};

export const stringToSet = (str: string): Set<number> => {
  if (str) {
    return new Set(stringToArray(str).map((v) => parseInt(v)));
  } else {
    return new Set();
  }
}