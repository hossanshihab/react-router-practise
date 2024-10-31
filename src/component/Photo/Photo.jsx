



const Photo = ({photo}) => {
    console.log(photo);
    const {albumId,thumbnailUrl,title,id} = photo;
    return (
        <div className="user">
           <h5>ID: {id}</h5>
            <img src={thumbnailUrl} alt="" />
            <h3>Album iD: {albumId}</h3>
            <h4>Title: {title}</h4>
        </div>
    );
};

export default Photo;