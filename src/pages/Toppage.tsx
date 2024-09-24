import { Box, Button, Link, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CodeOfConduct } from "../components/CodeOfConduct";
import headerimage from "../assets/images/HeaderImage.jpg";

export const Toppage = () => {
  const headingStyle = { borderBottom: "thick double #32a1ce" };
  return (
    <Box sx={{ margin: 0, padding: 0, width: "100vw" }}>
      <Header />
      <Box sx={{ textAlign: "center" }}>
        <Box
          component="img"
          src={headerimage}
          alt="ヘッダー用画像"
          sx={{
            width: "100vw",
          }}
        />
        <Box id="about" sx={{ margin: 3 }}>
          <Typography variant="h4" className="heading" sx={headingStyle}>
            NKC-UGについて
          </Typography>
          <Typography>
            NKC-UGは現在45名の名古屋工学院専門学校公認のプログラミングサークルです。
            <br />
            『プログラミングを楽しみたい』『プログラミングで悩みを解決したい』といった思いを持つメンバーが集まっています。
            <br />
            ハッカソン、学生エンジニアの交流会への参加など各々が自由な活動を行っています。
          </Typography>
        </Box>
        <CodeOfConduct />
        <Box id="contact" sx={{ margin: 3 }}>
          <Typography variant="h4" className="heading" sx={headingStyle}>
            加入方法（ NKC生向け ）
          </Typography>
          <Typography>下のボタン押すと専用フォームへ遷移</Typography>
          <Box id="welcomeForm" sx={{ margin: 2 }}>
            <Link href="./">
              <Button variant="contained">入部はこちらから</Button>
            </Link>
            <Typography>※中身は未実装</Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
