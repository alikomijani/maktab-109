import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { courses as initialCourses } from "../data/course";
import Post from "../components/Post/Post";
import "./courses.style.css";

function Courses() {
  const [courses, setCourses] = useState(initialCourses);
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const filteredCourses = courses.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const deleteCourse = (id: number) => {
    // setCourses(courses.filter((item) => item.id !== id));
    setCourses((oldCourses) => oldCourses.filter((item) => item.id !== id));
  };
  //   useEffect(() => {
  //     const mouseHandler = () => {};
  //     document.body.addEventListener("mousemove", mouseHandler);
  //     const interval = setInterval(() => {}, 1000);
  //     let mount = true;
  //     fetch("url").then((res) => {
  //       if (mount) {
  //         setSearch("ali");
  //       }
  //     });
  //     return () => {
  //       mount = false;
  //       document.body.removeEventListener("mousemove", mouseHandler);
  //       clearInterval(interval);
  //     };
  //   }, []);
  //   useEffect(() => {
  //     console.log("component did update");
  //   });
  //   useEffect(() => {
  //     console.log("search is updated!");
  //   }, [search]);
  //   useEffect(() => {
  //     console.log("courses is updated!");
  //   }, [courses]);
  //   useEffect(() => {
  //     console.log("filteredCourses is updated!");
  //   }, [filteredCourses]);
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
        {filteredCourses.map((course, index) => {
          const isOpen = !!(index % 2);
          return (
            <Post
              deleteAction={() => {
                deleteCourse(course.id);
              }}
              key={course.id}
              title={course.title}
              image={course.img}
              description={course.description}
              info={course.information}
              action={() => alert(isOpen ? course.title : "end")}
              isOpen={isOpen}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default Courses;

// function setState(init) {
//   let state = init;
//   function setState(value) {
//     if (typeof value === "function") {
//       value(state);
//     } else {
//       state = value;
//     }
//     render();
//   }
//   return [state, setState];
// }
