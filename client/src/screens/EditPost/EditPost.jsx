import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { createPost, getPost, updatePost } from "../../services/posts";
import { useHistory, useParams } from "react-router";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      const editPost = getPost(params.id);
      setTitle(editPost.title);
      setDescription(editPost.description);
    }
  }, [params.id]);

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
        Edit Form
      <form onSubmit={handleSubmit}>
        <h1 id="formHead">Edit FORM</h1>
        <label id="formL" htmlFor="">
          Title:
        </label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <label id="formL" htmlFor="">
          Description:
        </label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
        <button type="submit" id="formBtn">
          Add Post
        </button>
      </form>
    </Layout>
  );
};

export default AddPost;
