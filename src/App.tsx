import "./app.style.css";
import Post from "./components/Post/Post";
import Layout from "./components/Layout/Layout";
import { courses } from "./data/course";
function App() {
  return (
    <Layout>
      <div className="wrapper">
        {courses.map((course, index) => {
          const isOpen = !!(index % 2);
          return (
            <Post
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

export default App;
