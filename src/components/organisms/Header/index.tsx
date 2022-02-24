import style from "./style.module.scss";
import { SearchBlock } from "components/molecules/SearchBlock";
import { Logo } from "components/atoms/Logo";

export const Header = () => {
  return (
    <header className={style.header}>
      <Logo className={style.logo} />
      <SearchBlock />
    </header>
  );
};
