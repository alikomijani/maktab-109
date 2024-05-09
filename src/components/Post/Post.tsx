import { useEffect, useState } from "react";
import "./post.style.css";

type PostProps = {
  title: string;
  description: string;
  info: string;
  action: () => void;
  ctaText?: string;
  image: string;
  isOpen?: boolean;
  deleteAction: () => void;
};

function Post({
  title,
  description,
  info,
  action,
  ctaText = "اطلاعات بیشتر",
  image,
  deleteAction,
  isOpen = false,
}: PostProps) {
  const confirmDelete = () => {
    const isConfirm = confirm(`are you sure to delete ${title}`);
    if (isConfirm) {
      deleteAction();
    }
  };
  const [state, setState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setState((old) => old + 5);
      console.log(title);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [title]);
  return (
    <div className="post">
      <button onClick={confirmDelete}>delete</button>
      {isOpen && <div className={"post-badge"}>درحال ثبت نام</div>}
      <h2 className="post-title">{title}</h2>
      <img src={image} alt="" width={"25%"} />
      <p className="post-description">{description}</p>
      <div className="post-info">{info}</div>
      <button className="button button--full" onClick={action}>
        {ctaText}
      </button>
    </div>
  );
}
export default Post;
