
import React from 'react';
import image from "./images/user2.png"

function Contact ({id,name,email, deleteAcontact}) {


    function handleDelete(){
        fetch(` https://agile-plains-31264.herokuapp.com/contacts/${id}`,{
          method:'DELETE'
        })
        .then(response=>response.json())
        .then(data=>deleteAcontact(id))
        .catch(error=>console.log(error))
        
      }

  return (
    <div style={{
      background:"#2F96B2",
         width: "95%",
        height: "30%",
        marginLeft:"9px",
        borderRadius:"10px",
        color:"white"
        }}>

      <div style={{marginTop:"15px",
                  display:"flex"}}>
        <img  style={{marginLeft:"2%",
                       marginTop:"15px",
                        width:"25%",
                        height:"15%",
                     borderRadius:"50%",
                     }} src={image}
                     alt="user "/>
      <div style={{marginLeft:"10%"}}>
         <h2>{name}</h2>
         <p>{email}</p>
      </div>               
        
  
    </div>
    <button  onClick={handleDelete} style={{
      borderRadius:"20px",
      backgroundColor:"#040C3A",
      color:"#F5F5F5",
      marginBottom:"5px"}}>Delete</button>
    </div>)
    
  
}



export default Contact;