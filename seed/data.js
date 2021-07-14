import db from "../db/connection.js";
import Post from "../models/post.js";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const posts = [
    {
      title: "post1",
      description: "this is our blog description",
    },
    {
      title: "post2",
      description: "weare creating a group project!",
    },
  ];
  await Post.insertMany(posts);
  console.log("Created Posts!");

  // close database connection. done.
  db.close();
};

insertData();
