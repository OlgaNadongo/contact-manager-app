import React from 'react';


function Footer() {
  return (
    <div style={{
        backgroundColor:"white",
        color:"#040C3A",
        width:"450px",
        height: "50px",
        borderRadius: "5px",
        paddingTop:"5px"}} >
        <p style={{color:"040C3A"}}
        > &copy;{new Date().getFullYear()} Wanne Inc| All rights reserved
        </p>
    </div>
  );
}

export default Footer;