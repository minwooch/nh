import React from "react";
import style from "./style.module.scss";
import { CloseButton } from "components/atoms/CloseButton";
import { SearchInput } from "components/atoms/SearchInput";
import { useSearch } from "router-sync/hooks/useSearch";

export const SearchBlock = () => {
  const [urlParams, updateUrlParams] = useSearch();
  const [searchInput, setSearchInput] = React.useState("");
  React.useEffect(() => {
    if (searchInput !== urlParams) setSearchInput(urlParams);
  }, [urlParams]);

  const onInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setSearchInput(value);
    },
    []
  );

  const onInputKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const value = searchInput;
        if (typeof value === "string") {
          updateUrlParams(value);
        }
      }
    },
    [searchInput, updateUrlParams]
  );

  const onClearClick = React.useCallback(() => {
    updateUrlParams("");
  }, [updateUrlParams]);

  return (
    <div className={style.searchBlock}>
      <div className={style.searchInput}>
        <SearchInput
          value={searchInput}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
        />
      </div>
      <div className={style.closeButtonWrapper} onClick={onClearClick}>
        <div className={style.closeButtonTT}>
          <CloseButton className={style.closeButton} />
        </div>
      </div>
    </div>
  );
};
