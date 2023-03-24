import {
  CHAPTER_ASSIGNED_TEXT,
  SUBMIT_CHAPTER_FORM_TITLE,
} from "../../constants";
import BackButton from "../../container/BackButton";
import { IChapter } from "../../container/Chapters/interface";
import AssignUserToChapter from "../../container/Users/AssignUserToChapter";
import { CHAPTER_BY_ID_QUERY } from "../../grql/query/chapter.query";
import { __getFullName } from "../../helper";
import { useQuery } from "@apollo/client";
import {
  Button,
  Card,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";

const validationSchema = yup.object({
  text: yup
    .string()
    .min(5, "Answer should be of minimum 5 characters length")
    .optional(),

  userId: yup.string().optional(),
});

const UpdateChapterForm = () => {
  const { id: chapterId } = useParams();
  const [assign, setAssign] = useState<boolean>(false);

  const { loading, error, data } = useQuery(CHAPTER_BY_ID_QUERY, {
    variables: {
      chapterId,
    },
  });

  const formik = useFormik({
    initialValues: {
      text: "",
      userId: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const chapter: IChapter = data?.chapter;

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
      <Card sx={{ padding: 5, my: 2, borderRadius: 4 }}>
        <div>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 3 }}
            fontWeight="bolder"
          >
            {SUBMIT_CHAPTER_FORM_TITLE}
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
            <Switch checked={assign} onChange={() => setAssign(!assign)} />
          </Typography>
        </div>
        <form onSubmit={formik.handleSubmit}>
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
                  disabled={false}
                >
                  {false ? "Submitting.." : "Submit"}
                </Button>
              </Grid>
            </Grid>
          )}
        </form>
      </Card>
    </>
  );
};

export default UpdateChapterForm;
