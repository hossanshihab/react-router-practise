import { Link, useNavigate } from "react-router-dom";



export const Post = ({ post }) => {
  
  const navigate = useNavigate();
  
  const handleShowDetailsPost = () => {

      navigate(`/post/${id}`)
  }

  const {id,body,title} = post;
  console.log(post);
  return (
    <div className="user">
      <h1>ID: {id}</h1>
      <h2>Body: {body}</h2>
      <h3>Title: {title}</h3>

      <Link to={`/post/${id}`}>Post Details</Link>

      <button onClick={handleShowDetailsPost}>Show Specefic Post</button>
    </div>
  );
};
