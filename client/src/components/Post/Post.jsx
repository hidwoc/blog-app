// import { Link } from "react-router-dom";
import { deletePost } from "../../services/posts";

const Post = ({title, description}) => {

  return (
    <div className="post-details">
      <div className="post-title">{title}</div>
      <div className="post-description">{description}</div>
      <div className="post-buttons">
        <button className="edit-button">EDIT</button>
        {/* <button className="delete-button" onClick={() => deletePost(id)}>DELETE</button> */}
      </div>
    </div>
  );
};

export default Post;
