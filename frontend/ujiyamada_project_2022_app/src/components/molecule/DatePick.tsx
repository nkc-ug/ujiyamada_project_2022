import { Container, IconButton, Modal, Typography } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Box, Stack } from "@mui/system";
import moment from "moment";
import { ModalStyle } from "../style/ModalStyle";
import { MonthStateContext, YearStateContext } from "../context/contextProvider";

export const DatePic: FC = () => {
  const [ErrorModalOpen, setErrorModalOpen] = useState<boolean>(false);
  const { state: selectYear, setState: setSelectYear } = useContext(YearStateContext);
  const { state: selectMonth, setState: setSelectMonth } = useContext(MonthStateContext);

  useEffect(() => {
    setSelectYear(Number(moment().format("YYYY")));
    setSelectMonth(Number(moment().format("MM")));
  }, []);

  const addDate = () => {
    if (selectMonth + 1 === 13) {
      setSelectYear(selectYear + 1);
      setSelectMonth(1);
    } else {
      if (selectMonth + 1 != 4) {
        setSelectMonth(selectMonth + 1);
      } else {
        setErrorModalOpen(true);
      }
    }
  };

  const subDate = () => {
    if (selectMonth - 1 === 0) {
      setSelectYear(selectYear - 1);
      setSelectMonth(12);
    } else {
      if (selectMonth - 1 != 3) {
        setSelectMonth(selectMonth - 1);
      } else {
        setErrorModalOpen(true);
      }
    }
  };

  return (
    <Stack direction='row'>
      <IconButton onClick={subDate}>
        <ArrowCircleLeftOutlinedIcon fontSize='large' />
      </IconButton>
      <Box sx={{ my: 1.5 }}>
        <Typography variant='h5' textAlign='center' sx={{ mx: 2 }}>
          {selectYear}年{selectMonth}月
        </Typography>
      </Box>
      <IconButton onClick={addDate}>
        <ArrowCircleRightOutlinedIcon fontSize='large' />
      </IconButton>
      <Modal
        open={ErrorModalOpen}
        onClose={() => {
          setErrorModalOpen(!ErrorModalOpen);
        }}
      >
        <Container maxWidth='xs' sx={{ ...ModalStyle }}>
          <Stack sx={{ mx: 8 }}>
            <Typography textAlign='center' noWrap={true}>
              まだデータが
              <br />
              存在しない月です。
            </Typography>
          </Stack>
        </Container>
      </Modal>
    </Stack>
  );
};
