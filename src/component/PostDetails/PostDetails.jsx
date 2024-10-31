import { useLoaderData, useNavigate } from "react-router-dom"




const PostDetails = () => {


    const posts = useLoaderData();
    const navigate = useNavigate();

    const handleGoback = () => {
        navigate(-1)
    }
    console.log(posts);

    const {id,title,body} = posts;

  return (
    <div className="user">
        <h3>ID: {id}</h3>
        <h4>Title: {title}</h4>
        <h4>Body: {body}</h4>

        <button onClick={handleGoback}>Go back</button>
    </div>
  )
}

export default PostDetails