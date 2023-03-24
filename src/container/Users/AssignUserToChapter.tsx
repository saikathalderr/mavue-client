import { UPDATE_CHAPTER_QUERY } from "../../grql/query/chapter.query";
import { USERS_QUERY } from "../../grql/query/user.query";
import { IUser } from "./interface";
import { useMutation, useQuery } from "@apollo/client";
import { Switch, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from "react-router-dom";

const AssignUserToChapter = ({
  chapterId,
}: {
  chapterId: string | undefined;
}) => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(USERS_QUERY);
  const [updateChapter, { loading: updatingChapter }] =
    useMutation(UPDATE_CHAPTER_QUERY);

  const onAssignUser = ({ userId }: { userId: string }) => {
    updateChapter({
      variables: {
        updateChapterId: chapterId,
        input: {
          userId,
        },
      },
    }).then(() => {
      navigate(-1);
    });
  };
  if (!chapterId) return <p>No chapter ID found!</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 200,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 200,
          "& ul": { padding: 0 },
        }}
      >
        {data.users.map((user: IUser, idx: number) => {
          return (
            <ListItem key={idx + 1 + " ListItem"}>
              <ListItemText primary={user.firstName} />
              <Switch
                disabled={loading || updatingChapter}
                edge="end"
                onChange={() => onAssignUser({ userId: user.id })}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default AssignUserToChapter;
