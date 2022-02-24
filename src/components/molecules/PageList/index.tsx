import React from "react";
import style from "./style.module.scss";
import { PageButton } from "components/atoms/PageButton";

type Props = {
  currentPage: number;
  pageButtons: {
    pageNumber: number;
    onClick: () => void;
  }[];
};

export const PageList: React.VFC<Props> = ({ currentPage, pageButtons }) => {
  return (
    <div className={style.pageList}>
      {pageButtons.map((pageButton) => {
        return (
          <div key={pageButton.pageNumber} className={style.pageButton}>
            <PageButton
              selected={currentPage === pageButton.pageNumber}
              pageNumber={pageButton.pageNumber}
              onClick={pageButton.onClick}
            />
          </div>
        );
      })}
    </div>
  );
};
