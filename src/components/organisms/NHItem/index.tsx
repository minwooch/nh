import React from "react";
import style from "./style.module.scss";
import { CardMainImage } from "components/molecules/CardMainImage";
import { CardSubImageList } from "../CardSubImageList";
import { Title } from "components/atoms/Title";
import { CheckButton } from "components/atoms/CheckButton";
import { useCatalog } from "hooks/useCatalog";

type Detail = {
  internalId: string;
  url: string;
};

type Props = {
  nhId: string;
  name: string;
  details: Detail[];
};

export const NHItem: React.VFC<Props> = ({ nhId, name, details }) => {

  const onNHItemClick = React.useCallback(() => {

  }, []);

  const onCheckClick = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const { mainItem, cells } = useCatalog({ nhId: nhId, details: details });
  return (
    <div className={style.nhItem} onClick={onNHItemClick}>
      <div className={style.nhImage}>
        <CardMainImage src={mainItem.url} />
      </div>
      <div className={style.nhItemContainer}>
        <div className={style.nhTitle}>
          <Title text={name} />
        </div>
        {cells.length > 1 && (
          <div className={style.nhSubImageList}>
            <CardSubImageList cells={cells} />
          </div>
        )}
      </div>
      <div className={style.nhItemCheckButton} onClick={onCheckClick}>
        <CheckButton />
      </div>
    </div>
  );
};
