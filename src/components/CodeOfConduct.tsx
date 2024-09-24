import { Box, List, ListItem, Typography } from "@mui/material";

//行動規範
export const CodeOfConduct = () => {
  const headingStyle = { borderBottom: "thick double #32a1ce" };
  return (
    <Box sx={{ margin: 3 }}>
      <Typography variant="h4" sx={headingStyle}>
        NKC-UGの行動規範
      </Typography>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5">メンバーに期待される行為</Typography>
        <Typography>
          ご自身に可能な範囲で、仲間である同じコミュニティのメンバーとコミュニケーションを取りましょう。
          <br />
          参加すること、登壇すること、運営すること、インプットすること、そしてその結果をアウトプットすること全てがコミュニティ全体に対しての貢献になります。みなさんの貢献で成り立つのがコミュニティです。(giveの精神は大歓迎です)
          <br />
          「何度も参加しコミュニティに慣れている方」も多くいらっしゃいますが「初めて参加される方」も大切なコミュニティの仲間です。初めて参加される方への配慮を忘れないようにしましょう。
        </Typography>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5">メンバーに期待されない行為</Typography>
        <List sx={{ width: "fit-content", margin: "auto" }}>
          <ListItem>
            仲間であるコミュニティメンバーやコミュニティ自体に対して貢献がなく、「NKC-UG」の名前だけを語り、使用し、その影響力で自分勝手な営業行為・勧誘行為・自身の立場を誇示することは、控えてください。
          </ListItem>
          <ListItem>
            オンライン・オフライン問わず、イベントの場において、一部仲間同士で必要以上にたむろする、仲間同士でしか通じない話題や略語など、初めての参加者を無視する様な内輪話で盛り上がるのは、控えてください。
          </ListItem>
          <ListItem>
            他人や他社、特定の個人や企業に対する批判や文句は禁止です。罵り・嘲りは勿論、些細な疑問や不満でも、配慮無きコミュニケーションから発生する言動は相手を傷付けることがあります。
            <br />
            コミュニティに集まる仲間同士への思いやりや愛を持った言動が行えない方は参加を控えてください。
          </ListItem>
          <ListItem>
            コミュニティ関係者やコミュニティ外の全ての方々に対しても、人種、性別、性的指向、身体的特徴、見た目、政治、宗教（または無宗教）などに係る表現は、いかなる場合も適切ではありません。
          </ListItem>
          <ListItem>
            身勝手で営利目的の強い人材紹介、転職強要、マルチ商法、宗教など、コミュニティ趣旨やイベントとは関係のない勧誘は、控えてください。
          </ListItem>
          <ListItem>
            NKC-UGは、いかなる反社会的勢力とも一切関係を持ちません。コミュニティへの参加・登壇・協力等の関係者が反社会的勢力であることが判明した場合には、その関係解消に向け適切な措置をすみやかに講じます。
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
