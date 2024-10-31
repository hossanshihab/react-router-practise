import { Link } from "react-router-dom";







const User = ({user}) => {

    const {id,name,phone,username,website,email} = user;
    console.log(user);
    return (

        <div className="user">
            <h3>ID: {id}</h3>
            <h4>Name: {name}</h4>
            <h5>phone: {phone}</h5>  
            <h6>Username: {username}</h6>
            <p>Website: {website}</p>
            <p>Email: {email}</p>

            <Link to={`/user/${id}`}>Show Details</Link>
            
            {/* <Link to={`/user/${id}`}>
            <button>show</button>
            </Link> */}

        </div>
    );
};

export default User;