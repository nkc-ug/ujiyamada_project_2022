import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import ModalItem from "../molecule/ModalItem";
import { ModalContext } from "../page/HomePage";

const SearchModal:React.FC = () => {
    const {state:modalOpen, setState:setModalOpen} = useContext(ModalContext);
    return(
        <>
            <Modal open={modalOpen} closeAfterTransition>
                <Box sx={modalStyle}>
                    <ModalItem/>
                    <Button sx={{mt:3}} onClick={() => {setModalOpen(!modalOpen)}}>
                        閉じる
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default SearchModal;

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    boxShadow: 5,
    p: 4,
    borderRadius: 3
  };