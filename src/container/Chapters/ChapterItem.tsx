import AccountChip from "../Users/AccountChip";
import { IChapter } from "./interface";
import {
  Brightness1,
  AccessTimeFilled,
} from "@mui/icons-material";
import { Card, Chip, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChapterItem = ({ article }: { article: IChapter }) => {
  const navigate = useNavigate();

  return (
    <>
      <Card
        sx={{ padding: 2, my: 2, borderRadius: 4, cursor: "pointer" }}
        onClick={() => navigate(`/chapters/edit/${article.id}`)}
      >
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={1}>
            <Brightness1 fontSize="inherit" color="error" />
            <Brightness1 fontSize="inherit" color="secondary" />
            <Brightness1 fontSize="inherit" color="primary" />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={"auto"}>
                <Typography variant="subtitle2" component="h1" noWrap>
                  <b>{article.title}</b>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="subtitle2" component="h1" noWrap>
                  {article.requirements}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                {article.recurringInterval ? (
                  <Chip
                    color="warning"
                    size="small"
                    icon={<AccessTimeFilled />}
                    label={article.recurringInterval}
                  />
                ) : null}
              </Grid>
              <Grid item xs={3}>
                {article?.assignedTo ? (
                  <AccountChip
                    firstName={article?.assignedTo?.firstName}
                  />
                ) : null}
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ChapterItem;
