import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useContext } from "react";
import { ModalItem } from "../molecule/ModalItem";
import { ModalContext } from "../context/contextProvider";
import { ModalStyle } from "../style/ModalStyle";

export const SearchModal: FC = () => {
  const { state: modalOpen, setState: setModalOpen } = useContext(ModalContext);
  return (
    <>
      <Modal open={modalOpen} closeAfterTransition>
        <Box sx={ModalStyle}>
          <ModalItem />
          <Button
            sx={{ mt: 3 }}
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
          >
            閉じる
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default SearchModal;
