import React from "react";
import Fetch from "./components/Pixabay/Pixabay";
import Login from "./components/Login/Login";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
export default class App extends React.Component{
  render(){
    return(
      <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login></Login>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/pixabay" element={<Fetch></Fetch>}></Route>
   </Routes>
   </BrowserRouter>
      </>
    )
  }
}


// import React from "react"
// import Api from "./Apifetching"

// export default class App extends React.Component{
//   render(){
//     return(
//       <>
//       <Api/>
//       </>
//     )
//   }
// }