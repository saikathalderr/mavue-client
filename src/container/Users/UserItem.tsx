import { IUser } from "./interface";
import { Brightness1, Delete } from "@mui/icons-material";
import { Card, Grid, IconButton, Typography } from "@mui/material";

const UserItem = ({ user }: { user: IUser }) => {
  return (
    <>
      <Card sx={{ padding: 2, my: 2, borderRadius: 4 }}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={1}>
            <Brightness1 fontSize="inherit" color="info" />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={"auto"}>
                <Typography variant="subtitle2" component="h1">
                  <b>{user.firstName + ' ' + user.lastName}</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container alignItems="center" justifyContent="end">
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
      </Card>
    </>
  );
};

export default UserItem;
