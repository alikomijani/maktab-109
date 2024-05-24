import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Course,
  getCoursesApi,
  getCoursesApiById,
  updateCourseIsOpenApi,
} from "../api/course.api";

export function useGetCourses(search: string) {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCoursesApi().then((data) => setCourses(data));
  }, []);

  const toggleCourseStatus = useCallback((id: number, isOpen: boolean) => {
    updateCourseIsOpenApi(id, isOpen).then(() => {
      getCoursesApi().then((data) => setCourses(data));
    });
  }, []);
  const filteredCourses = useMemo(() => {
    return courses.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [courses, search]);

  return { courses, toggleCourseStatus, filteredCourses };
}

export function useGetCourseById(courseId: string) {
  const [course, setCourse] = useState<Course>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getCoursesApiById(courseId!)
      .then((data) => {
        setCourse(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, [courseId]);
  return {
    data: course,
    isLoading,
    isError,
  };
}
