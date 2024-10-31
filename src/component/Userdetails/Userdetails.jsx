import { useLoaderData, useNavigate } from "react-router-dom";

const Userdetails = () => {
  const user = useLoaderData();

  const navigate = useNavigate();
  const handleGoback = () => {
      navigate(-1);
  }
  console.log(user);
  const { name, website, email, id } = user;
  return (
    <div className="">
      <h1>User Details</h1>
      <div className="user">
        <p>{name}</p>
        <p>ID: {id}</p>
        <p>Website: {website}</p>
        <p>Email: {email}</p>
        <button onClick={()=>handleGoback()}>Go back</button>
      </div>
    </div>
  );
};

export default Userdetails;
