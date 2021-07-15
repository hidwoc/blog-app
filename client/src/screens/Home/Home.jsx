import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts";

const Home = () => {
  const [ posts, setPosts ]= useState ([]);

  useEffect(() =>{
      const fetchPosts = async () =>{
        const allPosts = await getPosts()
        console.log(allPosts);
      }
  }, [] )

  return (
    <div>
      This is where Posts will go
    </div>
  );
};

export default Home;