import { useState, useCallback, useRef } from "react";
import Post from "../../components/Post/Post";
import "./courses.style.css";
import { useGetCourses } from "../../hooks/useGetCourses";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";

function Courses() {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { data } = useGetCourses();

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
    <Box>
      <Box
        component={Paper}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 600,
          mx: "auto",
          my: 2,
          p: 2,
          gap: 2,
        }}
      >
        <Button
          onClick={() => navigate("/dashboard/courses/create")}
          variant="contained"
        >
          افزودن دوره جدید
        </Button>
        <Box display="flex" flexGrow={1}>
          <TextField
            ref={inputRef}
            fullWidth
            value={search}
            onChange={handleSearch}
            type="text"
            label="جست و جو"
            placeholder="جست و جو"
          />
          <Button onClick={() => setSearch("")}>reset</Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {data?.map((course) => (
          <Grid item key={course.id} xs={12} md={4} xl={3}>
            <Post
              id={course.id}
              openAction={() => {}}
              action={courseInfoAction}
              title={course.title}
              description={course.description}
              info={course.information}
              isOpen={course.isOpen}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Courses;
