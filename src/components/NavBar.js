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
        color:"#040C3A",
        display:"flex",
        justifyContent: "space-around",
        paddingTop:"7px"
        
        }}>

         <h4 style={{marginTop:"2px"}}>Contact list Manager</h4>
         
            <NavLink style={{
              color:"#040C3A",
              textDecoration:"none"
              }} to="/">Home</NavLink>
            
            <NavLink 
            style={{
              color:"#040C3A",
              textDecoration:"none"}} to="/contacts">Contact</NavLink>
           
            <NavLink 
            style={{
              color:"#040C3A",
              textDecoration:"none"}} to="/about">About Us</NavLink>
         
         
    </div>
  );
}

export default NavBar;