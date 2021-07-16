import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <div className="homelink">
          <h1 id="blog-header">BlogApp</h1>
        </div>
        <div className="posts">
          <Link to="/"> Posts</Link>
        </div>
        <div className="addPosts">
          <Link to="/addpost">Add Post</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
