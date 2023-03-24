import { CHAPTER_ASSIGNED_TEXT } from "../../constants";
import BackButton from "../BackButton";
import AccountChip from "./AccountChip";
import { IUser } from "./interface";
import { Card, Typography } from "@mui/material";

export default function AlreadyAssignedUser({ user }: { user: IUser | undefined }) {
  return (
    <>
      <BackButton />
      <Card sx={{ padding: 5, my: 2, borderRadius: 4 }}>
        <Typography variant="subtitle1" gutterBottom fontWeight="bolder">
          {CHAPTER_ASSIGNED_TEXT}
          <AccountChip
            firstName={user ? user?.firstName : "anonymous"}
            lastName={user?.lastName}
          />
          , let him/her finish first
        </Typography>
      </Card>
    </>
  );
}
