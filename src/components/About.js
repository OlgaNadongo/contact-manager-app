import React from "react";

function About(){
    return(<div style={{
        minHeight: "500px",
        width:"450px",
        borderRadius: "5px",
        background: "#D9D9D9", 
        marginBottom:"10px",
        alignItems: "center",
        
        }}>
          <h2 style={{
            color:"#040C3A",
            paddingTop:"25px"
          }}>About Us</h2>
          <div style={{
             padding:"5px",
             background:"#040C3A",
             minHeight:"300px",
             width:"90%",
             marginLeft:"17px",
             borderRadius:"10px",
             paddingTop:"45px"
          }}>
          <p style={{color:"white"}}> Our app is designed to give you an easier and <br/> efficient way to manage your contacts.<br/>Whether you are having a busy day or a relaxed day,<br/> the app allows you peace of mind knowing that <br/> all your contacts are in one place. </p>
          </div>
         
    </div>)
}

export default About