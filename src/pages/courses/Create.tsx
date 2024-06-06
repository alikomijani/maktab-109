import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import InputFileUpload from "../../components/upload-file/UploadFile";
import { SubmitHandler, useForm } from "react-hook-form";
import { courseScheme } from "./course.validation";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateCourseForm = {
  title: string;
  description: string;
  information: string;
  isOpen: boolean;
};

function Create() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateCourseForm>({
    context: {
      min: 18,
      max: 22,
    },
    resolver: yupResolver(courseScheme),
    defaultValues: {
      title: "ali",
    },
  });
  const handleCreateCourse: SubmitHandler<CreateCourseForm> = (data) => {};
  return (
    <Box>
      <Card>
        <CardContent>
          <CardHeader title="اضافه کردن دوره جدید" />
          <form onSubmit={handleSubmit(handleCreateCourse)}>
            <Grid container spacing={2} item xs={12} md={6}>
              <Grid item xs={12}>
                <TextField
                  {...register("title")}
                  fullWidth
                  helperText={errors.title?.message}
                  error={!!errors.title}
                  label={"عنوان دوره"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("description")}
                  fullWidth
                  label={"توضیحات"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("information")}
                  fullWidth
                  label={"اطلاعات دوره"}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox {...register("isOpen")} defaultChecked />}
                  label="در حال ثبت نام"
                />
              </Grid>
              <Grid item xs={12}>
                <InputFileUpload
                  buttonProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    name: "image",
                  }}
                >
                  آپلود تصویر
                </InputFileUpload>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  اضافه کردن دوره
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Create;
