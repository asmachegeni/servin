import './Comment.css'
const Comment = ({
  src,
  name,
  position,
  comment,
}: {
  src: any;
  name: string;
  position: string;
  comment: string;
}) => {
  return (
    <div className="comment-container">
      <img src={src} className="comment-img" />
      <p className="comment-name">{name}</p>
      <p className="comment-position">{position}</p>
      <p className="comment-comment">{comment}</p>
    </div>
  );
};

export default Comment;
