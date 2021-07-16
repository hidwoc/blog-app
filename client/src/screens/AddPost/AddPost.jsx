import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { createPost } from "../../services/posts";
import { useHistory } from "react-router";
import "./AddPost.css";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      description,
    };
    await createPost(newPost);

    // props.setToggleFetch((current) => !current);

    history.push("/");
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1 id="formHead">FORM</h1>
        <div id="formContainer">
        <label id="formL" htmlFor="">
          Title:
        </label>
        <input id="title"type="text" onChange={(e) => setTitle(e.target.value)} />
        <label id="formL" htmlFor="">
          Description:
        </label>
        <input id="description"type="text" onChange={(e) => setDescription(e.target.value)} />
        <button type="submit" id="formBtn">
          Add Post
        </button>

        </div>
      </form>
    </Layout>
  );
};

export default AddPost;
