// import React, { useEffect, useState } from "react";
// function Fetch(props){
//     let [api,setApi1]=useState([])
//     useEffect(()=>{
//         let api=fetch("https://fakestoreapi.com/products")
//         api.then(res=>res.json()).then(val=>{
//             setApi1(val)
//         })
//     })
// }




//pixabay classbasedapproach
// import React from "react";
// class Fetch extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={users:[]}
//     }
//     componentDidMount(){
//         let api = fetch("https://pixabay.com/api/?key=46193686-86bb1056285a2ce0ece3e83ba&q=yellow+flowers&image_type=photo");
//         console.log(api);
//         api.then(x=>x.json()).then((x)=>{
//             this.setState({users:x.hits})
//         })
//     }
//     render(){
//         return(
//             <>
//                     <div >
                    
//                      {this.state.users.map((z)=> <img src={z.webformatURL} alt="error"/>)}
                        
//                     </div>
                
//             </>
//         )
//     }
// }
// export default Fetch


//pixabay function based approach
// import React, { useEffect, useState } from "react";
// const Fetch=()=>{
// let [api,setApi]=useState([])


// useEffect(()=>{
//     let api =fetch("https://pixabay.com/api/?key=46193686-86bb1056285a2ce0ece3e83ba&q=yellow+flowers&image_type=photo")
//     api.then(res=>res.json()).then(val=>
//         setApi(val.hits)
//     )
// })
// // console.log(api);

// return(
   
//     <div>
//         <input type="text" />
//         <br></br>
//         <br />
//         {api.map((x)=>(
//             <img src={x.webformatURL} alt={x.tags}/>
//         ))}
//     </div>
    
// )
// }
// export default Fetch



//pixbay2
// import React, { useEffect, useState } from "react";
// const Fetch=()=>{
// let [api,setApi]=useState([])
// let [search,setSearch]=useState([])


// useEffect(()=>{
//     let api =fetch(`https://pixabay.com/api/?key=46193686-86bb1056285a2ce0ece3e83ba&q=${search}&image_type=photo`)
//     api.then(res=>res.json()).then(val=>
//         setApi(val.hits)
//     )
// })

// return(
   
//     <div>
//         <input type="text" onChange={e=>setSearch(e.target.value)}/>
//         <br></br>
//         <br />
//         {api.map((x)=>(
//             <img src={x.webformatURL} alt={x.tags}/>
//         ))}
//     </div>
    
// )
// }
// export default Fetch 






// //search & fakestore
import React, { useEffect, useState } from "react";

const Api = () => {
  const [api, setApi] = useState({ products: [] });
  const [search, setSearch] = useState("");

  // Fetching data from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((val) => {
        setApi({ products: val });
      });
  }, []); 
  const valueSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search products..." 
        onChange={valueSearch} 
        value={search}
      />

      <div className="grid-container">
        {api.products
          .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="grid-item">
              <img src={product.image} alt={product.title} width="100" />
              <p>{product.title}</p>
              <p>${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Api;






//hooks without dependency
// import React, { useEffect, useState } from "react";
// let Api =()=>{
//     let [api,setApi]=useState("")
//     let [search,setSearch]=useState()
//     useEffect(()=>{
//         fetch(`https://pixabay.com/api/?key=46193686-86bb1056285a2ce0ece3e83ba&q=${search}&image_type=photo`)
//         .then(res=>res.json()).then(val=>{
//             setApi(val.hits)
//         })
//         console.log("useEffect() called");
//     },[search])
//     return(
//         <div>
//             <input type="text" placeholder="seacrh image" onChange={e=>setSearch(e.target.value)} />
//         </div>
//     )
// }
// export default Api