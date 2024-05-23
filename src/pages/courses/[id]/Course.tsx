import { useParams } from "react-router-dom";
import { useGetCourseById } from "../../../hooks/useGetCourses";

function CoursePage() {
  const { courseId } = useParams();
  const { data, isError, isLoading } = useGetCourseById(courseId!);
  if (isError) {
    return <h1>something bad happened</h1>;
  }
  if (isLoading) {
    return <h1>...loading</h1>;
  }
  return (
    <div>
      <h1>نام دوره: {data?.title}</h1>
      <p>توضیحات : {data?.description}</p>
    </div>
  );
}

export default CoursePage;
