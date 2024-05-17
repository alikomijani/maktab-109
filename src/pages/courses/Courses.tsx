import { useState, useCallback } from "react";
import Post from "../../components/Post/Post";
import "./courses.style.css";
import { useGetCourses } from "../../hooks/useGetCourses";

function Courses() {
  const [search, setSearch] = useState("");

  const { courses, toggleCourseStatus, filteredCourses } =
    useGetCourses(search);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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

  return (
    <div>
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
            openAction={toggleCourseStatus}
            action={courseInfoAction}
            key={course.id}
            title={course.title}
            description={course.description}
            info={course.information}
            isOpen={course.isOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
