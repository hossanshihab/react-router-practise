
import { useLoaderData } from 'react-router-dom';
import Photo from '../Photo/Photo';



const Photos = () => {

    const photos = useLoaderData();
    console.log(photos);
    return (
        <div>
            <h1>Photos: {photos.length}</h1>

            <div className='users'>
                {
                    photos.map((photo,index) => <Photo key={index.id} photo={photo}></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;