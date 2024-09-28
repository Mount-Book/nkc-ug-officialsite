import { Box, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Event = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box textAlign="center" margin="auto">
        <Typography variant="h5">
          現在予定されているイベントはありません
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};
