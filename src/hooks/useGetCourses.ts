import {
  Course,
  getCoursesApi,
  getCoursesApiById,
  updateCourseApi,
} from "../api/course.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: getCoursesApi,
  });
}

export function useGetCourseById(courseId: string) {
  return useQuery({
    queryKey: ["course", courseId],
    queryFn: () => getCoursesApiById(courseId!),
    enabled: !!courseId,
  });
}

export function useUpdateCourse() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ courseId, data }: { courseId: string; data: Course }) =>
      updateCourseApi(courseId, data),
    onSuccess(data) {
      // queryClient.invalidateQueries({
      //   queryKey: ["courses", data.id],
      // });

      // queryClient.invalidateQueries({
      //   queryKey: ["courses"],
      // });
      //
      queryClient.setQueryData(["course", data.id], () => {
        return data;
      });

      queryClient.setQueryData(["courses"], (oldData: Course[]) => {
        return oldData.map((item) => (item.id === data.id ? data : item));
      });
    },
  });
}
