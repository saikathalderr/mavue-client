import { UPDATE_CHAPTER_QUERY } from "../../grql/query/chapter.query";
import { __getFullName } from "../../helper";
import AssignUserToChapter from "../Users/AssignUserToChapter";
import { IUser } from "../Users/interface";
import { useMutation } from "@apollo/client";
import { Button, Grid, Switch, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const validationSchema = yup.object({
  text: yup
    .string()
    .min(5, "Answer should be of minimum 5 characters length")
    .required("Please fill out your answer"),
});

export default function ChapterUpdateForm({
  chapterId,
  assigned,
}: {
  chapterId: string;
  assigned?: IUser;
}) {
  const navigate = useNavigate();
  const [assign, setAssign] = useState<boolean>(false);

  const [updateChapter, { loading: updatingChapter }] =
    useMutation(UPDATE_CHAPTER_QUERY);

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
  return (
    <>
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
            disabled={updatingChapter}
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
                {updatingChapter
                  ? "Submitting.."
                  : assigned
                  ? `submit as ${__getFullName(assigned)}`
                  : "Submit"}
              </Button>
            </Grid>
          </Grid>
        )}
      </form>
    </>
  );
}
