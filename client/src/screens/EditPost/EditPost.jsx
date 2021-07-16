import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getPost, updatePost } from "../../services/posts";
import { useHistory, useParams } from "react-router";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();
  const params = useParams();
  useEffect(async () => {
    const editPost = await getPost(params.id);
    setTitle(editPost.title);
    setDescription(editPost.description);
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = {
      title,
      description,
    };
    await updatePost(params.id, updatedPost);

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
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label id="formL" htmlFor="">
          Description:
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" id="formBtn">
          Update Post
        </button>
      </form>
    </Layout>
  );
};

export default EditPost;
