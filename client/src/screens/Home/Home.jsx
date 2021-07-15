import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout"
import { getPosts } from "../../services/posts";

const Home = () => {
  const [ posts, setPosts ]= useState ([]);

  useEffect(() =>{
      const fetchPosts = async () =>{
        const allPosts = await getPosts()
        console.log(allPosts);
      }
      fetchPosts();
  }, [] )

  return (
    <Layout>
      This is where Posts will go
    </Layout>
  );
};

export default Home;