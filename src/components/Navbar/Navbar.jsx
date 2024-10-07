import React from "react";
import '../Styling/Style.css'
import { Link } from "react-router-dom";
export default class Nav1 extends React.Component{
    render(){
        return(
            <>

           <nav>
                <div className="logo"><h1 id="logo">PIXABAY</h1></div>
                <div id="items"> 
                    <ul>
                        <li>Home</li>
                        <li>Profile</li>
                        <Link to="/">
                        <li><button id="loginbtn">Login</button></li>
                        </Link>
                    </ul>

                </div>
            </nav>
            </>
        )
    }
}