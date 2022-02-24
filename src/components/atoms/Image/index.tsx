import React, { useMemo } from "react";
import style from "./style.module.scss";

type Props = {
  src: string;
  alt?: string;
};

export const Image: React.VFC<Props> = ({ src, alt = "" }) => {
  const urlWithCdn = useMemo(
    () => `https://acnhcdn.com/latest/${src}.png`,
    [src]
  );

  return <img className={style.image} src={urlWithCdn} alt={alt} />;
};
