import { Image } from "components/atoms/Image";
import React from "react";
import style from "./style.module.scss";

type Props = {
  src: string;
  alt?: string;
};

export const CardMainImage: React.VFC<Props> = ({ src, alt }) => {
  return (
    <div className={style.cardMainImage}>
      <Image src={src} alt={alt} />
    </div>
  );
};
