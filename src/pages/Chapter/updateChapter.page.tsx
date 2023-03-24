import {
  CHAPTER_ASSIGNED_TEXT,
  SUBMIT_CHAPTER_FORM_TITLE,
} from "../../constants";
import BackButton from "../../container/BackButton";
import { IChapter } from "../../container/Chapters/interface";
import AccountChip from "../../container/Users/AccountChip";
import AssignUserToChapter from "../../container/Users/AssignUserToChapter";
import { IUser } from "../../container/Users/interface";
import {
  CHAPTER_BY_ID_QUERY,
  UPDATE_CHAPTER_QUERY,
} from "../../grql/query/chapter.query";
import { __getFullName } from "../../helper";
import { useMutation, useQuery } from "@apollo/client";
import { Print } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import * as yup from "yup";

const validationSchema = yup.object({
  text: yup
    .string()
    .min(5, "Answer should be of minimum 5 characters length")
    .required("Please fill out your answer"),
});

const UpdateChapterForm = () => {
  const printBlockRef = useRef(null);

  const { id: chapterId } = useParams();
  const navigate = useNavigate();
  const [assign, setAssign] = useState<boolean>(false);
  const { loading, error, data } = useQuery(CHAPTER_BY_ID_QUERY, {
    variables: {
      chapterId,
    },
  });
  const [updateChapter, { loading: updatingChapter }] =
    useMutation(UPDATE_CHAPTER_QUERY);

  const handlePrint = useReactToPrint({
    content: () => printBlockRef.current,
  });

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      updateChapter({
        variables: {
          updateChapterId: chapterId,
          input: {
            text: values.text,
          },
        },
      }).then(() => {
        navigate(-1);
      });
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const chapter: IChapter = data?.chapter;
  const chapterAssignedUser: IUser | undefined | null = chapter.assignedTo;

  if (chapter.assignedTo) {
    return (
      <>
        <BackButton />
        <Card sx={{ padding: 5, my: 2, borderRadius: 4 }}>
          <Typography variant="subtitle1" gutterBottom fontWeight="bolder">
            {CHAPTER_ASSIGNED_TEXT} {__getFullName(chapter.assignedTo)}
          </Typography>
        </Card>
      </>
    );
  }

  return (
    <>
      <BackButton />
      <Card sx={{ borderRadius: 4 }}>
        <Box sx={{ padding: 5, my: 2 }} ref={printBlockRef}>
          <div>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ mb: 3 }}
              fontWeight="bolder"
            >
              {chapter.text ? chapter.title : SUBMIT_CHAPTER_FORM_TITLE}
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              gutterBottom
              color="error"
              fontWeight="bolder"
            >
              Requirements 👇
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {chapter.requirements}
            </Typography>
            {chapter.text ? (
              <>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  color="secondary"
                  fontWeight="bolder"
                >
                  Answer
                </Typography>
                <Typography variant="subtitle2" gutterBottom sx={{ mb: 2 }}>
                  {chapter.text}
                </Typography>
                <AccountChip
                  firstName={
                    chapterAssignedUser
                      ? chapterAssignedUser?.firstName
                      : "Admin"
                  }
                />
              </>
            ) : null}
          </div>

          {!chapter.text ? (
            <form onSubmit={formik.handleSubmit}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="secondary"
                fontWeight="bolder"
                sx={{
                  mt: 2,
                }}
              >
                Don't know the answer? assign someone else
                <Switch
                  disabled={updatingChapter || loading}
                  checked={assign}
                  onChange={() => setAssign(!assign)}
                />
              </Typography>
              {assign ? (
                <AssignUserToChapter chapterId={chapterId} />
              ) : (
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  sx={{
                    mt: 5,
                  }}
                >
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="text"
                      name="text"
                      label="Answer"
                      multiline
                      value={formik.values.text}
                      onChange={formik.handleChange}
                      error={formik.touched.text && Boolean(formik.errors.text)}
                      helperText={formik.touched.text && formik.errors.text}
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                      disabled={updatingChapter}
                    >
                      {updatingChapter ? "Submitting.." : "Submit"}
                    </Button>
                  </Grid>
                </Grid>
              )}
            </form>
          ) : null}
        </Box>
        {chapter.text ? (
          <Button
            fullWidth
            variant="contained"
            color="error"
            startIcon={<Print />}
            sx={{ mt: 2 }}
            onClick={handlePrint}
          >
            Print
          </Button>
        ) : null}
      </Card>
    </>
  );
};

export default UpdateChapterForm;
