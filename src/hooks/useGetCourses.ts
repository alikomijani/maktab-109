import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Course,
  getCoursesApi,
  updateCourseIsOpenApi,
} from "../api/course.api";

export function useGetCourses(search: string) {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCoursesApi().then((data) => setCourses(data));
  }, []);

  const toggleCourseStatus = useCallback(
    (id: number, isOpen: boolean) => {
      updateCourseIsOpenApi(id, isOpen).then(() => {
        getCoursesApi().then((data) => setCourses(data));
      });
    },
    [setCourses]
  );
  const filteredCourses = useMemo(() => {
    return courses.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [courses, search]);

  return { courses, toggleCourseStatus, filteredCourses };
}
