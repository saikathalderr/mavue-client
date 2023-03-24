import { AccountCircle } from "@mui/icons-material";
import { Chip, Typography } from "@mui/material";

export default function AccountChip({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName?: string;
}) {
  return (
    <>
      <Chip
        color="info"
        size="small"
        icon={<AccountCircle />}
        label={
          <Typography variant="subtitle2" component="h1" color="white">
            <b>{lastName ? firstName + " " + lastName : firstName}</b>
          </Typography>
        }
      />
    </>
  );
}
