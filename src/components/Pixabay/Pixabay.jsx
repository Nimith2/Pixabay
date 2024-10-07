import React, { useEffect, useState } from "react";
import Nav1 from "../Navbar/Navbar";
import "./Pixabay.css"
const Fetch=()=>{
let [api,setApi]=useState([])
let [search,setSearch]=useState([])
useEffect(()=>{
    let api =fetch(`https://pixabay.com/api/?key=46193686-86bb1056285a2ce0ece3e83ba&q=${search}&image_type=photo`)
    api.then(res=>res.json()).then(val=>
        setApi(val.hits)
    )
})

return(
   <>
   <Nav1/>
    <div className="body-container">
        <h1>Stunning royalty-free images & royalty-free stock</h1>
        <p>Over 5 million+ high quality stock images, videos and music shared by our talented community.</p>
        <input className="input" type="text" placeholder="Search For Images" onChange={e=>setSearch(e.target.value)}/>
        <br />
        </div>
       <div className="images">
       {api.map((x,index)=>(
            <img key={index} src={x.webformatURL} alt={x.tags}/>
        ))}
       </div>

   
   </>
    
)
}
export default Fetch 