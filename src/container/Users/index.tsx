import UserItem from "./UserItem";
import { USERS_QUERY } from "../../grql/query/user.query";
import { IUser } from "./interface";
import { useQuery } from "@apollo/client";
import { Add } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(USERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const navigateToCreateUserPage = () => navigate("/users/create");

  return (
    <>
      <Stack direction="row-reverse" spacing={2}>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={navigateToCreateUserPage}
        >
          Create
        </Button>
      </Stack>
      {data.users.map((user: IUser, idx: number) => {
        return <UserItem key={idx + 1} user={user} />;
      })}
    </>
  );
};

export default Users;
