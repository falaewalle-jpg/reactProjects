import { useEffect,useState } from "react";
import React from 'react'

function useV(currency) {
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.rates))
        console.log(data);

    },[currency]);
    console.log("fetched");
    return data;
}

export default useV;
