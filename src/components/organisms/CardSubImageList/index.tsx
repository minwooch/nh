import React from "react";
import style from "./style.module.scss";
import { CardSubImage } from "components/molecules/CardSubImage";

type Props = {
  cells: {
    internalId: string;
    url: string;
    getProps: () => {
      onClick: () => void;
      onMouseEnter: () => void;
      onMouseLeave: () => void;
    };
  }[];
};

export const CardSubImageList: React.VFC<Props> = ({ cells }) => {
  const onClick = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);
  return (
    <div className={style.cardSubImageList} onClick={onClick}>
      {cells.map((cell) => {
        return (
          <div key={cell.internalId} {...cell.getProps()}>
            <CardSubImage src={cell.url} />
          </div>
        );
      })}
    </div>
  );
};
