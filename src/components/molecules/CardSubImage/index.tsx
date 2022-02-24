import { Image } from "components/atoms/Image";
import React from "react";
import style from "./style.module.scss";

type Props = {
  src: string;
  alt?: string;
};

export const CardSubImage: React.VFC<Props> = ({ src, alt }) => {
  return (
    <div className={style.cardSubImage}>
      <Image src={src} alt={alt} />
    </div>
  );
};
