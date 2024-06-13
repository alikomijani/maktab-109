import { useParams } from "react-router-dom";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { useGetCourseById } from "../../../hooks/useGetCourses";
import EditCourseComponent from "../../../components/forms/EditCourseComponent";

function CoursePage() {
  const { courseId } = useParams();
  const { data, isLoading, isError } = useGetCourseById(courseId!);

  if (isError) {
    return <h1>something bad happened</h1>;
  }
  if (isLoading) {
    return <h1>...loading</h1>;
  }

  return (
    <Box display={"flex"} flexDirection={"row"} gap={2}>
      <Card
        sx={{
          flexGrow: 1,
        }}
      >
        <CardHeader title="مشخصات دوره" />
        <CardContent>
          <Box>
            <h1>نام دوره: {data?.title}</h1>
            <p>توضیحات : {data?.description}</p>
          </Box>
        </CardContent>
      </Card>
      <Box flexBasis={"400px"} flexGrow={0}>
        <EditCourseComponent />
      </Box>
    </Box>
  );
}

export default CoursePage;
