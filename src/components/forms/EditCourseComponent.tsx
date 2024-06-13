import { useParams } from "react-router-dom";
import { useGetCourseById, useUpdateCourse } from "../../hooks/useGetCourses";
import { useEffect, useState } from "react";
import { Course } from "../../api/course.api";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";

export default function EditCourseComponent() {
  const { courseId } = useParams();
  const { data } = useGetCourseById(courseId!);
  const { mutate } = useUpdateCourse();
  const [course, setCourse] = useState<Course>({
    title: "",
    id: 0,
    description: "",
    information: "",
    isOpen: true,
  });
  useEffect(() => {
    if (data) {
      setCourse(data);
    }
  }, [data]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourse((old) => ({ ...old, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ courseId: courseId!, data: course });
  };
  return (
    <Card>
      <CardHeader title="آپدیت دوره" />
      <CardContent>
        <Box
          component={"form"}
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            label="عنوان دوره"
            size="small"
            name="title"
            type="text"
            value={course.title}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="توضیحات دوره"
            size="small"
            name="description"
            type="text"
            value={course.description}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="اطلاعات دوره"
            size="small"
            name="information"
            type="text"
            value={course.information}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="secondary">
            ذخیره تغییرات
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
