import { Button, Drawer, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import CommentIcon from "@mui/icons-material/Comment";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import AddToHomeScreenOutlinedIcon from "@mui/icons-material/AddToHomeScreenOutlined";
import { DrawerContext, ModalContext } from "../../context/context";

export const LeftDrawer: FC = () => {
  const { state: drawerOpen, setState: setDrawerOpen } = useContext(DrawerContext);
  const { state: modalOpen, setState: setModalOpen } = useContext(ModalContext);
  return (
    <Drawer
      anchor='left'
      open={drawerOpen}
      onClose={() => {
        setDrawerOpen(!drawerOpen);
      }}
    >
      <Box sx={{ mt: 5, mx: 5 }}>
        <Stack spacing={3} alignItems='flex-start'>
          <Button
            startIcon={<SearchIcon />}
            onClick={() => {
              setDrawerOpen(!drawerOpen);
              setModalOpen(!modalOpen);
            }}
          >
            <Typography variant='h6'>分類検索</Typography>
          </Button>
          <Button
            startIcon={<ImportContactsIcon />}
            onClick={() => {
              setDrawerOpen(!drawerOpen);
              window.open("https://www.city.ise.mie.jp/kurashi/gomi/dashikata/1001439.html");
            }}
          >
            <Typography variant='h6'>
              ゴミ分別
              <br />
              ガイドブック
            </Typography>
          </Button>
          <Button
            startIcon={<CommentIcon />}
            onClick={() => {
              setDrawerOpen(!drawerOpen);
              window.open("http://www.mie-c.ed.jp/cujiya/New5374/enlightenment/gennryou.html");
            }}
          >
            <Typography variant='h6'>
              伊勢市の
              <br />
              ゴミの現状
            </Typography>
          </Button>
          <Button
            startIcon={<QuestionAnswerOutlinedIcon />}
            onClick={() => {
              setDrawerOpen(!drawerOpen);
              window.open("http://www.mie-c.ed.jp/cujiya/New5374/Q_Aproject/www/index.html");
            }}
          >
            <Typography variant='h6'>よくある質問</Typography>
          </Button>
          <Button
            startIcon={<AddToHomeScreenOutlinedIcon />}
            onClick={() => {
              setDrawerOpen(!drawerOpen);
              window.open("https://www.city.ise.mie.jp/kurashi/gomi/notice/1010177.html");
            }}
          >
            <Typography variant='h6'>LINEで分別</Typography>
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
};
