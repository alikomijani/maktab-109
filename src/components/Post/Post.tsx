import "./post.style.css";
import { memo } from "react";
import { pythonImage } from "../../assets";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { createToDo } from "../../features/to-do/toDoSlice";
type PostProps = {
  id: number;
  title: string;
  description: string;
  info: string;
  action: (id: number) => void;
  ctaText?: string;
  // image: string;
  isOpen?: boolean;
  openAction: (id: number, isOpen: boolean) => void;
};

function Post({
  id,
  title,
  description,
  info,
  action,
  ctaText = "اطلاعات بیشتر",
  // image,
  isOpen = false,
}: PostProps) {
  const dispatch = useAppDispatch();
  return (
    <Card elevation={3}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Button
          onClick={() =>
            dispatch(
              createToDo({
                todo: {
                  id: "60",
                  description: "این و خودم ساختم",
                  status: false,
                  subTasks: [],
                  title: " ثبت نام دوره" + title,
                },
              })
            )
          }
        >
          {"افزودن یادآور"}
        </Button>
        {isOpen && <div className={"post-badge"}>درحال ثبت نام</div>}
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <img src={pythonImage} alt="" width={"25%"} />
        <p className="post-description">{description}</p>
        <div className="post-info">{info}</div>
        <Button
          fullWidth
          color="secondary"
          variant="contained"
          onClick={() => action(id)}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
}
const MemoPost = memo(Post);
export default MemoPost;
