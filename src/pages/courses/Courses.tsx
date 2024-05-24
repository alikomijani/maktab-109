import { useState, useCallback } from "react";
import Post from "../../components/Post/Post";
import "./courses.style.css";
import { useGetCourses } from "../../hooks/useGetCourses";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { toggleCourseStatus, filteredCourses } = useGetCourses(search);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const courseInfoAction = useCallback(
    (id: number) => {
      navigate(`/dashboard/courses/${id}`);
    },
    [navigate]
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
