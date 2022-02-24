import React from "react";
import leaf from "./leaf.png";

type Props = {
  className?: string;
};

export const Logo = React.memo(({ className }: Props) => {
  return <img className={className} src={leaf} alt="logo"></img>;
});
