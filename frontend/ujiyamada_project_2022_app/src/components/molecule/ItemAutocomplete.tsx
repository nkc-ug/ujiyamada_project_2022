import { Autocomplete, TextField } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import axios from "../../util/axiosUtil";
import { ItemContext } from "../context/contextProvider";

export const ItemAutocomplete: FC = () => {
  const { state: selectItem, setState: setSelectItem } = useContext(ItemContext);
  const [itemList, setItemList] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>("");

  // resを仮で準備できないため空配列
  useEffect(() => {
    const GetDivideData = async () => {
      const res = await axios.get(`api/divide/${inputText}`);
      setItemList(res.data);
    };
    GetDivideData();
  }, []);

  return (
    <Autocomplete
      value={selectItem}
      onChange={(e, v) => {
        setSelectItem(v);
      }}
      inputValue={inputText}
      onInputChange={(e, v) => {
        setInputText(v);
      }}
      disablePortal
      id='selectArea'
      options={itemList}
      sx={{ minWidth: 180, mx: "auto", bgcolor: "white", borderRadius: 1 }}
      renderInput={(params) => <TextField {...params} label={"分別検索"} />}
    />
  );
};
