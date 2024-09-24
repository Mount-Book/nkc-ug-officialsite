// src/components/Header.jsx
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Link } from "@mui/material";
import nkcugLogo from "../assets/NKCUG_DP.svg";

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ padding: 0, backgroundColor: "rgb(192,192,192)" }}
    >
      <Toolbar>
        <Link href="/" color="inherit" underline="none" sx={{ flexGrow: 1 }}>
          <Box
            component="img"
            src={nkcugLogo}
            alt="NKC-UG Logo"
            style={{ height: "40px" }}
          />
        </Link>
        <Link
          href="https://linktr.ee/nkc_ug"
          color="inherit"
          underline="none"
          target="_blank"
        >
          Account
        </Link>
      </Toolbar>
    </AppBar>
  );
};
