import { CREATE_USER_FORM_TITLE } from "../../constants";
import BackButton from "../../container/BackButton";
import { CREATE_USER_MUTATION } from "../../grql/mutation/user.mutation";
import { useMutation } from "@apollo/client";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {USERS_QUERY} from "../../grql/query/user.query";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(3, "First Name should be of minimum 3 characters length")
    .required("First Name is required"),
  lastName: yup
    .string()
    .min(3, "Last Name should be of minimum 3 characters length")
    .required("Last Name is required"),
});

const CreateUserForm = () => {
  const navigate = useNavigate()
  const [createUser, { loading, error }] =
    useMutation(CREATE_USER_MUTATION);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createUser({
        variables: {
          input: values,
        },
        update: (cache, { data: { createUser } }) => {
          let data: any = cache.readQuery({ query: USERS_QUERY });
          data = {
            ...data,
            users: [...data.users, createUser],
          };
          cache.writeQuery({ query: USERS_QUERY, data });
        },
      }).then(() => {
        formik.resetForm();
        navigate(-1)
      });
    },
  });

  if (error) return <p>Error : {error.message}</p>;
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
            {CREATE_USER_FORM_TITLE}
          </Typography>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                autoComplete="off"
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                autoComplete="off"
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating.." : "Submit"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
};

export default CreateUserForm;
