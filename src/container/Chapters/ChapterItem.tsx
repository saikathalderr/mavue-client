import { IChapter } from "./interface";
import {
  Delete,
  Brightness1,
  AccessTimeFilled,
  AccountCircle,
  CloudDownload,
} from "@mui/icons-material";
import { Card, Chip, Grid, Typography, IconButton } from "@mui/material";

const ChapterItem = ({ article }: { article: IChapter }) => {
  return (
    <>
      <Card sx={{ padding: 2, my: 2, borderRadius: 4 }}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={1}>
            <Brightness1 fontSize="inherit" color="error" />
            <Brightness1 fontSize="inherit" color="secondary" />
            <Brightness1 fontSize="inherit" color="primary" />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={"auto"}>
                <Typography variant="subtitle2" component="h1">
                  <b>{article.title}</b>
                </Typography>
              </Grid>
              <Grid item xs={"auto"}>
                <Typography variant="subtitle2" component="h1">
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
                <Chip
                  color="info"
                  size="small"
                  icon={<AccountCircle />}
                  label={
                    <Typography
                      variant="subtitle2"
                      component="h1"
                      color="white"
                    >
                      <b>{article.assignedTo.firstName}</b>
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <Grid container alignItems="center" justifyContent="end">
                  <IconButton
                    color="secondary"
                    aria-label="download chapter PDF"
                    component="label"
                  >
                    <CloudDownload />
                  </IconButton>
                  <IconButton
                    color="error"
                    aria-label="delete chapter"
                    component="label"
                  >
                    <Delete />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ChapterItem;
