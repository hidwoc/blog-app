import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <div className="homelink">
          <h1>BlogApp</h1>
        </div>
        <div className="posts">
          <Link to="/"> Posts</Link>
        </div>
        <div className="addPosts">
          <Link to="/addpost"> add Posts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
