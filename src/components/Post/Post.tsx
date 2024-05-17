import "./post.style.css";
import { memo, useContext } from "react";
import { pythonImage } from "../../assets";
import { ToDoContext } from "../../context/ToDoContextProvider";
import { ToDoActionTypesEnum } from "../../features/to-do";
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
  openAction,
  isOpen = false,
}: PostProps) {
  const { dispatch } = useContext(ToDoContext);
  const confirmDelete = () => {
    const isConfirm = confirm(`are you sure to delete ${title}`);
    if (isConfirm) {
      openAction(id, !isOpen);
    }
  };
  return (
    <div className="post">
      <button
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
      </button>
      {isOpen && <div className={"post-badge"}>درحال ثبت نام</div>}
      <h2 className="post-title">{title}</h2>
      <img src={pythonImage} alt="" width={"25%"} />
      <p className="post-description">{description}</p>
      <div className="post-info">{info}</div>
      <button className="button button--full" onClick={() => action(id)}>
        {ctaText}
      </button>
    </div>
  );
}
const MemoPost = memo(Post);
export default MemoPost;
