import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import { FC } from "react";

export const CalenderItemList: FC = () => {
  return (
    <Grid2 sx={{ m: 2 }} container>
      {itemList.map((item) => {
        switch (item.color) {
          case 1:
            return (
              <Stack direction='row' key={item.color} sx={{ mx: 1, my: 0.8 }}>
                <TaskAltIcon sx={{ mr: 0.8, color: "#5c6bc0" }} />
                <Typography>{item.itemName}</Typography>
              </Stack>
            );
          case 2:
            return (
              <Stack direction='row' key={item.color} sx={{ mx: 1, my: 0.8 }}>
                <TaskAltIcon sx={{ mr: 0.8, color: "#DDD05D" }} />
                <Typography>{item.itemName}</Typography>
              </Stack>
            );
          case 3:
            return (
              <Stack direction='row' key={item.color} sx={{ mx: 1, my: 0.8 }}>
                <TaskAltIcon sx={{ mr: 0.8, color: "#66bb6a" }} />
                <Typography>{item.itemName}</Typography>
              </Stack>
            );
          case 4:
            return (
              <Stack direction='row' key={item.color} sx={{ mx: 1, my: 0.8 }}>
                <TaskAltIcon sx={{ mr: 0.8, color: "#ffa726" }} />
                <Typography>{item.itemName}</Typography>
              </Stack>
            );
          case 5:
            return (
              <Stack direction='row' key={item.color} sx={{ mx: 1, my: 0.8 }}>
                <TaskAltIcon sx={{ mr: 0.8, color: "#ab47bc" }} />
                <Typography>{item.itemName}</Typography>
              </Stack>
            );
          case 6:
            return (
              <Stack direction='row' key={item.color} sx={{ mx: 1, my: 0.8 }}>
                <TaskAltIcon sx={{ mr: 0.8, color: "#ef5350" }} />
                <Typography>{item.itemName}</Typography>
              </Stack>
            );
          case 7:
            return (
              <Stack direction='row' key={item.color} sx={{ mx: 1, my: 0.8 }}>
                <TaskAltIcon sx={{ mr: 0.8, color: "#29b6f6" }} />
                <Typography>{item.itemName}</Typography>
              </Stack>
            );
          default:
            return <Box>エラーが発生しました</Box>;
        }
      })}
      <Box height='80px' bgcolor='primary' />
    </Grid2>
  );
};

const itemList = [
  {
    itemName: "ガラス・くずびん類・陶磁器類",
    color: 1
  },
  {
    itemName: "布類・段ボール類",
    color: 2
  },
  {
    itemName: "資源びん",
    color: 3
  },
  {
    itemName: "プラスチック",
    color: 4
  },
  {
    itemName: "ペットボトル",
    color: 5
  },
  {
    itemName: "燃えるごみ",
    color: 6
  },
  {
    itemName: "紙類(新聞・折込チラシ・飲料用紙パック・雑誌・雑がみ類)",
    color: 7
  }
];
