import axios from "../../util/axiosUtil";
import { FC, useContext, useEffect, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack } from "@mui/system";
import { CalenderType } from "../../types/CalenderType";
import { DatePic } from "../molecule/DatePick";
import { CalenderCell } from "../molecule/CalenderCell";
import { CalenderDate } from "../molecule/CalenderDate";
import { CalenderItemList } from "../molecule/CalenderItemList";
import { AreaStateContext, MonthStateContext } from "../../context/context";

export const Calender: FC = () => {
  const { state: selectArea } = useContext(AreaStateContext);
  const { state: selectMonth } = useContext(MonthStateContext);
  const [calenderData, setCalenderData] = useState([]);

  useEffect(() => {
    const getCalenderData = async () => {
      const res = await axios.get(`/api/calender/${selectArea}/${selectMonth}`);
      setCalenderData(res.data);
    };
    getCalenderData();
  }, [selectArea, selectMonth]);

  return (
    <>
      <Stack direction='row' justifyContent='center' sx={{ my: 1 }}>
        <DatePic />
      </Stack>
      <Grid2 container columns={7}>
        {data.map((dayOfWeek) => {
          return (
            <Grid2 key={dayOfWeek} xs={1}>
              <CalenderDate dayOfWeek={dayOfWeek} />
            </Grid2>
          );
        })}
      </Grid2>
      <Grid2 container columns={7}>
        {calenderData.map((calenderData: CalenderType) => {
          return (
            <Grid2 key={calenderData.day_id} xs={1}>
              <CalenderCell
                day_id={calenderData.day_id}
                day={calenderData.day}
                holiday={calenderData.holiday}
                item_id={calenderData.item_id}
              />
            </Grid2>
          );
        })}
      </Grid2>
      <CalenderItemList />
    </>
  );
};

const data = ["日", "月", "火", "水", "木", "金", "土"];
