import style from "./style.module.scss";
import { Header } from "components/organisms/Header";
import { NHItemList } from "components/organisms/Page";
import { PageController } from "components/organisms/PageController";

export const Page = () => {
  return (
    <div className={style.container}>
      <Header />
      <PageController />
      <NHItemList />
    </div>
  );
};
