export const filter = (
  id: number | undefined,
  set: Set<number>,
  setNot: Set<number>
) => {
  if (set.size === 0 && setNot.size === 0) {
    return true;
  } else if (set.size === 0) {
    if (typeof id === "undefined") {
      return true;
    }
    return !setNot.has(id);
  } else {
    if (typeof id === "undefined") {
      return false;
    }
    return set.has(id) && !setNot.has(id);
  }
};

export const filter2 = (
  ids: number[],
  set: Set<number>,
  setNot: Set<number>
) => {
  if (set.size === 0 && setNot.size === 0) {
    return true;
  } else if (set.size === 0) {
    if (ids.length === 0) {
      return true;
    }
    for (const i of ids) {
      if (setNot.has(i)) {
        return false;
      }
    }
    return true;
  } else {
    if (ids.length === 0) {
      return false;
    }
    let has = false;
    for (const i of ids) {
      if (setNot.has(i)) {
        return false;
      }
      if (!has && set.has(i)) {
        has = true;
      }
    }
    return has;
  }
};
