import { Box, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Event = () => {
  return (
    <Box>
      <Header />
      <Typography variant="h2">イベント一覧</Typography>
      <Box>
        <Typography variant="h5">
          現在予定されているイベントはありません
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};
