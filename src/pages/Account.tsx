import { Box, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Account = () => {
  return (
    <Box>
      <Header />
      <Typography variant="h2">アカウント一覧</Typography>
      <Footer />
    </Box>
  );
};
