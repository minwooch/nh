import React from "react";
import style from "./style.module.scss";

type Props = {
  pageNumber: number;
  selected: boolean;
  onClick: () => void;
};

export const PageButton: React.VFC<Props> = ({
  pageNumber,
  selected,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`${style.pageButton} ${selected ? style.selected : ""}`}
      onClick={onClick}
    >
      {pageNumber}
    </button>
  );
};
