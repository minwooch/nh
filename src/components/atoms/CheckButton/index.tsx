import { ReactComponent as Check } from "./icon_check_done-black.svg";
import style from "./style.module.scss";

type Props = {
  className?: string;
};

export const CheckButton = ({ className }: Props) => {
  return <Check className={`${className ? className : style.checkButton}`} />;
};
