import React from "react";
import style from "./style.module.scss";

export const SearchInput = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return <input {...props} placeholder={"이름"} className={style.searchInput} />;
};
