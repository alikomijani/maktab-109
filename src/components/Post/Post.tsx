import "./post.style.css";
import { memo } from "react";
import { pythonImage } from "../../assets";
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
  console.log(`${title} is render`);
  const confirmDelete = () => {
    const isConfirm = confirm(`are you sure to delete ${title}`);
    if (isConfirm) {
      openAction(id, !isOpen);
    }
  };
  return (
    <div className="post">
      <button onClick={confirmDelete}>
        {isOpen ? "بستن ثبت نام" : "باز کردن ثبت نام"}
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
