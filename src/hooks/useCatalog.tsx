import { useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { stateCatalog } from "state/state-catalog-select";

type Detail = {
  name?: string;
  internalId: string;
  url: string;
};

type Props = {
  nhId: string;
  details: Detail[];
};

export const useCatalog = (props: Props) => {
  const { nhId, details } = props;
  const checkedItemSet = useRecoilValue(stateCatalog(nhId));

  const allChecked = useMemo(() => {
    for (const detail of details) {
      if (checkedItemSet.has(detail.internalId) === false) {
        return false;
      }
    }
    return true;
  }, [details, checkedItemSet]);

  const [currentItem, setCurrentItem] = useState(details[0]);
  const [hoverItem, setHoverItem] = useState<Detail | null>(null);

  const mainItem = useMemo(() => {
    if (hoverItem != null) {
      return hoverItem;
    } else {
      return currentItem;
    }
  }, [currentItem, hoverItem]);

  const cells = useMemo(() => {
    const cells = [];
    for (const detail of details) {
      const cell = {
        name: detail.name,
        internalId: detail.internalId,
        url: detail.url,
        getProps: () => {
          return {
            onClick: () => {
              setCurrentItem(detail);
            },
            onMouseEnter: () => {
              setHoverItem(detail);
            },
            onMouseLeave: () => {
              setHoverItem(null);
            },
          };
        },
      };
      cells.push(cell);
    }
    return cells;
  }, [details]);

  return { allChecked, hoverItem, currentItem, cells, mainItem };
};
