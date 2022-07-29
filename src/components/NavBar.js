import React from 'react';
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div  style={{
       backgroundColor:"#2F96B2",
        width:"450px",
        height: "50px",
        borderRadius: "5px",
        marginTop:"25px",
        color:"#040C3A"
       
        }}>
         {/* < a href="#home">Home</a>
         < a href="#about">Contacts</a>
         < a href="#about">About us</a> */}
         <NavLink to="/">Home</NavLink>
         <NavLink to="/contacts" >Contacts</NavLink>
         <NavLink to="/about">About Us</NavLink>
    </div>
  );
}

export default NavBar;