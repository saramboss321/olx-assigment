import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Photos from "./Photos";

function Albums() {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState();
  const params = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setAlbums(res));
  });
  if (!albums) {
    return <>LOADING...</>;
  }
  return (
    <>
      <h1>Albums</h1>
      <div
        style={{ display: "grid", "grid-template-columns": "repeat(4, 1fr)" }}
      >
        {albums.map((item, index) => {
          return (
            <>
              <div className="div-style" style={{ width: 300 }}>
                <img className="image-styling" src={albums[index].image} />
                <div
                  className="title-style"
                  onClick={() => navigate("/Albums/" + index)}>

                  Title:  {item.title} Price:  {item.price}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Albums;