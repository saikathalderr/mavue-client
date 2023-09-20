import {
  Backdrop,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Brightness1, Delete } from "@mui/icons-material";

import { DELETE_USER_MUTATION } from "../../grql/mutation/user.mutation";
import { IUser } from "./interface";
import { USERS_QUERY } from "../../grql/query/user.query";
import { useMutation } from "@apollo/client";

const UserItem = ({ user }: { user: IUser }) => {
  const [deleteUser, { loading }] = useMutation(DELETE_USER_MUTATION);

  const onDeleteUser = () => {
    deleteUser({
      variables: {
        input: {
          id: user.id,
        },
      },
      update: (cache, { data: { deleteUser } }) => {
        let data: any = cache.readQuery({ query: USERS_QUERY });
        data = {
          ...data,
          users: [
            ...data.users.filter((user: IUser) => user.id !== deleteUser.id),
          ],
        };
        cache.writeQuery({ query: USERS_QUERY, data });
      },
    }).then(() => {});
  };

  return (
    <>
      <Card sx={{ padding: 2, my: 2, borderRadius: 4 }}>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={1}>
            <Brightness1 fontSize="inherit" color="info" />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={"auto"}>
                <Typography variant="subtitle2" component="h1">
                  <b>{user.firstName + " " + user.lastName}</b>
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
                onClick={() => onDeleteUser()}
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
