import "./post.style.css";
import { memo, useContext } from "react";
import { pythonImage } from "../../assets";
import { ToDoContext } from "../../context/ToDoContextProvider";
import { ToDoActionTypesEnum } from "../../features/to-do";
import { Button, Card, CardContent, Typography } from "@mui/material";
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
  const { dispatch } = useContext(ToDoContext);

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
            dispatch({
              type: ToDoActionTypesEnum.CREATE_TO_DO,
              payload: {
                todo: {
                  id: "60",
                  description: "این و خودم ساختم",
                  status: false,
                  subTasks: [],
                  title: " ثبت نام دوره" + title,
                },
              },
            })
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
