import { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import Layout from "../../components/Layout/Layout";
import { getPosts } from "../../services/posts";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="layoutofHome">
      <Layout>
        <div className="theposts">
          {!posts ? (
            <h4>loading</h4>
          ) : (
            posts.map((post) => (
              <Post
                title={post.title}
                description={post.description}
                key={post._id}
              />
            ))
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
