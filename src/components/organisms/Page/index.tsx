import style from "./style.module.scss";
import { NHItem } from "components/organisms/NHItem";
import { useRecoilValue } from "recoil";
import { stateNHItem } from "state/state-nh-item/state-nh-item";
import { stateCurrentPageItemIds } from "state/state-nh-item/state-current-page-item-ids";

export const NHItemList = () => {
  const data = useRecoilValue(stateNHItem);
  const currentPageData = useRecoilValue(stateCurrentPageItemIds);

  return (
    <div className={style.page}>
      <div className={style.nhItemContainer}>
        {currentPageData.map((id) => {
          return (
            <NHItem
              key={id}
              nhId={id}
              name={data.get(id)?.name ?? "todo"}
              details={data.get(id)?.details ?? [{"name":"내추럴 우드","internalId":"79","url":"FtrIcon/FtrBabybed_Remake_0_0"},{"name":"다크 우드","internalId":"65615","url":"FtrIcon/FtrBabybed_Remake_1_0"},{"name":"화이트","internalId":"131151","url":"FtrIcon/FtrBabybed_Remake_2_0"},{"name":"핑크","internalId":"196687","url":"FtrIcon/FtrBabybed_Remake_3_0"},{"name":"옐로","internalId":"262223","url":"FtrIcon/FtrBabybed_Remake_4_0"},{"name":"그린","internalId":"327759","url":"FtrIcon/FtrBabybed_Remake_5_0"},{"name":"블루","internalId":"393295","url":"FtrIcon/FtrBabybed_Remake_6_0"},{"name":"그레이","internalId":"458831","url":"FtrIcon/FtrBabybed_Remake_7_0"}]}
            />
          );
        })}
      </div>
    </div>
  );
};
