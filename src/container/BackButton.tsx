import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BackButton = ({ withText = true }: { withText?: boolean }) => {
  const navigate = useNavigate();
  return (
    <>
      <IconButton
        color="default"
        aria-label="delete chapter"
        component="label"
        size="large"
        sx={{ mr: 1 }}
        onClick={() => navigate(-1)}
      >
        <ArrowBack />
      </IconButton>
      {withText ? <b>Back</b> : null}
    </>
  );
};

export default BackButton;
