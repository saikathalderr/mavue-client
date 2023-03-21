import UserItem from "./UserItem";
import { USERS_QUERY } from "./graphql/user.query";
import { IUser } from "./interface";
import { useQuery } from "@apollo/client";
import {Button, Stack} from "@mui/material";
import {Add} from "@mui/icons-material";

const Users = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Stack direction="row-reverse" spacing={2}>
        <Button variant="contained" startIcon={<Add />}>Create</Button>
      </Stack>
      {data.users.map((user: IUser, idx: number) => {
        return <UserItem key={idx + 1} user={user} />;
      })}
    </>
  );
};

export default Users;
