import React from 'react';


function NavBar() {
  return (
    <div  style={{
       backgroundColor:"white",
        width:"450px",
        height: "50px",
        borderRadius: "5px",
        marginTop:"25px"
       
        }}>
         < a href="#home">Home</a>
         < a href="#footer">Footer</a>
    </div>
  );
}

export default NavBar;