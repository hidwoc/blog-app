import { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import Layout from "../../components/Layout/Layout";
import { getPosts } from "../../services/posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, [toggleFetch]);

  return (
    <div className="layoutofHome">
      <Layout>
        <div className="theposts">
          {!posts ? (
            <h4>loading</h4>
          ) : (
            posts.map((post) => (
              <Post
                key={post._id}
                id={post._id}
                title={post.title}
                description={post.description}
                setToggleFetch={setToggleFetch}
              />
            ))
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
