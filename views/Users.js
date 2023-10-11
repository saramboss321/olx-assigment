import { useParams } from "react-router-dom";
import Albums from "./Albums";
import { useEffect, useState } from "react";

function Users(){
    const [albums, setAlbums] = useState();
const params = useParams()
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => setAlbums(res));
    });
    if (!albums) {
      return <>LOADING...</>;
    }
    return(
    <>
    <div className="Card-styling">
    <img className="img-style" src={albums[params.id].image} />
    <h1 className="title-styling">Title: {albums[params.id].title}</h1>
    <h1 className="header-style">Price: {albums[params.id].price}</h1>
    </div>
    </>
    
    )}

export default Users;