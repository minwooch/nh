import React from "react";
import style from './style.module.scss';

type Props = {
  text: string;
};

export const Title: React.VFC<Props> = ({ text }) => {
  return <div className={style.title}>{text}</div>;
};
