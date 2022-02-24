import React from "react";
import style from "./style.module.scss";
import { PageList } from "components/molecules/PageList";
import { useRecoilState, useRecoilValue } from "recoil";
import { stateCurrentPage } from "state/state-nh-item/state-current-page";
import { stateFilterIds } from "state/state-nh-item/state-filter-ids";
import { statePageDisplayCount } from "state/state-nh-item/state-page-display-count";
import { statePageSize } from "state/state-nh-item/state-page-size";

export const PageController = () => {
  const [currentPage, setCurrentPage] = useRecoilState(stateCurrentPage);
  const items = useRecoilValue(stateFilterIds);
  const pageSize = useRecoilValue(statePageSize);
  const pageDisplayCount = useRecoilValue(statePageDisplayCount);
  const pageCount = Math.ceil(items.length / pageSize);

  const pageButtons = React.useMemo(() => {
    const pageButtons: {
      pageNumber: number;
      onClick: () => void;
    }[] = [];

    if (pageCount < pageDisplayCount) {
      for (let i = 0; i < pageCount; i++) {
        pageButtons.push({
          pageNumber: i + 1,
          onClick: () => {
            setCurrentPage(i);
          },
        });
      }
    } else {
      let leftDisplayCount = Math.floor(pageDisplayCount / 2);
      let rightDisplayCount = pageDisplayCount - leftDisplayCount - 1;

      if (currentPage - leftDisplayCount < 0) {
        leftDisplayCount = currentPage;
      } else if (pageCount - 1 - currentPage - rightDisplayCount < 0) {
        leftDisplayCount =
          leftDisplayCount - (pageCount - 1 - currentPage - rightDisplayCount);
      }
      rightDisplayCount = pageDisplayCount - leftDisplayCount - 1;

      for (let i = currentPage - leftDisplayCount; i < currentPage; i++) {
        pageButtons.push({
          pageNumber: i + 1,
          onClick: () => {
            setCurrentPage(i);
          },
        });
      }
      pageButtons.push({
        pageNumber: currentPage + 1,
        onClick: () => {
          setCurrentPage(currentPage);
        },
      });
      for (
        let i = currentPage + 1;
        i < currentPage + 1 + rightDisplayCount;
        i++
      ) {
        pageButtons.push({
          pageNumber: i + 1,
          onClick: () => {
            setCurrentPage(i);
          },
        });
      }
    }
    return pageButtons;
  }, [currentPage, pageDisplayCount, pageCount, setCurrentPage]);

  return (
    <div className={style.pageController}>
      <PageList currentPage={currentPage + 1} pageButtons={pageButtons} />
    </div>
  );
};
