import React from "react";
import { ReactComponent as Close } from "./close_black_24dp.svg";

type Props = {
  className?: string;
};

export const CloseButton = ({ className }: Props) => {
  return <Close className={`${className ? className : ""}`} />;
};
