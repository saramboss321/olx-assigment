import { useNavigate } from "react-router-dom"

function Header(){
    const navigate = useNavigate();

    return(
        <>
       <h1>Header</h1>
      <button onClick={() => navigate("/Albums")}>Album</button>
     
        </>
    )
}

export default Header