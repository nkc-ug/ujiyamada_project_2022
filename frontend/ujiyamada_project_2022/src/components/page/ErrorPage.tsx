import { Box, Typography } from "@mui/material";
import MainLayout from "../template/MainLayout";

const ErrorPage: React.FC = () => {
    return(
        <MainLayout>
            <Box sx={{height:1000, mt:5}}>
                <Typography variant="h5" textAlign='center'>ページが存在しません。</Typography>
            </Box>
        </MainLayout>
    )
}

export default ErrorPage;