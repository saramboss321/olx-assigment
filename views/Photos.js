import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Albums from "./Albums"

function Photos(){
    const navigate = useNavigate()
    const [Photos, setPhotos] = useState()


useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
    .then(res=> res.json())
    .then(res=> setPhotos(res))
})    
if(!Photos){
    return <>LOADING...</>
}
return(
<>
<h1>Photos</h1>
{Photos.map(item => {
return <div>{item}</div>
})}
</>
)}

export default Photos;