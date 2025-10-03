import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function MyButton() {
    const [ID,setID] = useState(0);
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/user/" + ID);
    }
    return (
        <>
            <input type='text' value={ID} onChange={(e)=>setID(e.target.value)}></input>
            <button onClick={handleClick}>Click Here</button>
        </>
  )
}

export default MyButton