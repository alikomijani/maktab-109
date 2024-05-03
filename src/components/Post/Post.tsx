import "./post.style.css";

type PostProps = {
  title: string;
  description: string;
  info: string;
  action: () => void;
  ctaText?: string;
  image: string;
  isOpen?: boolean;
};

function Post({
  title,
  description,
  info,
  action,
  ctaText = "اطلاعات بیشتر",
  image,
  isOpen = false,
}: PostProps) {
  return (
    <div className="post">
      {isOpen ? (
        <div className={"post-badge"}>درحال ثبت نام</div>
      ) : (
        <div className={"post-badge__black"}>اتمام ثبت نام</div>
      )}
      <input type="text" />
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
