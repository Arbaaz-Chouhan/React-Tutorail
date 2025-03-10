import React,{useEffect,useState} from 'react'
import axios from "axios";

function GetRequest() {
    const[userdata,setUseData] =  useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) =>{
    console.log(response);

    setUseData(response.data);
    
    })
  })
  return (
    <div>
        AxiosTopic 
        {userdata.map((data) => {  
            return (
                <div>{data.title}</div> 
            );
        })}
    </div>
);
}

export default GetRequest
