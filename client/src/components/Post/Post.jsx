import { Link } from "react-router-dom";
import { deletePost } from "../../services/posts";

const Post = ({ id, title, description, setToggleFetch }) => {
  const handleDelete = async() => {
  await deletePost(id);
    setToggleFetch((curr) => !curr);
  };

  return (
    <div className="post-details">
      <div className="post-title">{title}</div>
      <div className="post-description">{description}</div>
      <div className="post-buttons">
        <button className="edit-button">
          <Link to={`/editpost/${id}`}>EDIT</Link>
        </button>
        <button className="delete-button" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Post;
