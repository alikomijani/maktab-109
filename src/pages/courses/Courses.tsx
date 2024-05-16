import { useState, useMemo, useCallback, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import Post from "../../components/Post/Post";
import "./courses.style.css";
import {
  Course,
  getCoursesApi,
  updateCourseIsOpenApi,
} from "../../api/course.api";

function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [courses, search]);

  const openCloseCourseAction = useCallback((id: number, isOpen: boolean) => {
    updateCourseIsOpenApi(id, isOpen).then(() => {
      getCoursesApi().then((data) => setCourses(data));
    });
  }, []);
  const courseInfoAction = useCallback(
    (id: number) => {
      const course = courses.find((item) => item.id === id);
      if (course) {
        alert(course.isOpen ? course.title : "end");
      } else {
        alert("course not found!");
      }
    },
    [courses]
  );
  useEffect(() => {
    getCoursesApi().then((data) => setCourses(data));
  }, []);
  return (
    <Layout>
      <div className="search-wrapper">
        <input
          value={search}
          onChange={handleSearch}
          className="input"
          type="text"
          placeholder="جست و جو"
        />
        <button onClick={() => setSearch("")}>reset</button>
      </div>
      <div className="wrapper">
        {filteredCourses.map((course) => (
          <Post
            id={course.id}
            openAction={openCloseCourseAction}
            action={courseInfoAction}
            key={course.id}
            title={course.title}
            description={course.description}
            info={course.information}
            isOpen={course.isOpen}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Courses;
