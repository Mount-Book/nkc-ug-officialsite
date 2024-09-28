import { Box, Link, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Account = () => {
  const account = [
    { name: "𝕏 (旧：Twitter)", link: "https://x.com/NKCUG_DP" },
    {
      name: "connpass",
      link: "https://msp-nkc.connpass.com/",
    },
    {
      name: "GitHub",
      link: "https://github.com/nkc-ug",
    },
    {
      name: "Qiita",
      link: "https://qiita.com/organizations/nkc-ug",
    },
    { name: "Zenn", link: "https://zenn.dev/p/nkc_ug" },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box id="accountList" margin="auto">
        {account.map((value, key) => {
          return (
            <Link href={value.link} key={key} underline="none">
              <Typography variant="h5" sx={{ padding: 5 }}>
                {value.name}
              </Typography>
            </Link>
          );
        })}
      </Box>
      <Footer />
    </Box>
  );
};
