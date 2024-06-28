import api from "./config.api";
export type Course = {
  id: number;
  title: string;
  description: string;
  information: string;
  //   img: string;
  isOpen?: boolean;
};
export async function getCoursesApi() {
  const response = await api.get<Course[]>("/courses");
  return response.data;
}

export async function getCoursesApiById(id: string) {
  const response = await api.get<Course>(`/courses/${id}`);
  return response.data;
}

export async function updateCourseApi(id: number | string, course: Course) {
  const response = await api.put<Course>(`/courses/${id}`, course);

  return response.data;
}

export async function updateCourseIsOpenApi(
  id: number | string,
  isOpen: boolean
) {
  const response = await api.patch<Course>(`/courses/${id}`, { isOpen });
  return response.data;
}
