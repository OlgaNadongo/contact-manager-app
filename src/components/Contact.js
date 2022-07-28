// import React from "react";

// function Contact({id,name,email, deleteAcontact}){


//     function handleDelete(){
//         fetch(`http://localhost:4000/contacts/${id}`,{
//           method:'DELETE'
//         })
//         .then(response=>response.json())
//         .then(data=>deleteAcontact(id))
//         .catch(error=>console.log(error))
//       }



//     return (
//         <div 
//                 style={{
//                 background:"#2F96B2",
//                 width: "430",
//                 height: "70",}} >
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
            
//               <button 
//                     style={{borderRadius:"20",
//                     backgroundColor:"#040C3A",
//                     color:"#F5F5F5"}} 
//                     onClick={handleDelete}>
//                     Delete
//                     </button>

//         </div>
        
//     )
// }

// export default Contact;

import React from 'react';

function Contact ({id,name,email, deleteAcontact}) {


    function handleDelete(){
        fetch(` http://localhost:4000/contacts/${id}`,{
          method:'DELETE'
        })
        .then(response=>response.json())
        .then(data=>deleteAcontact(id))
        .catch(error=>console.log(error))
        
      }

  return (
    <div style={{
      background:"#2F96B2",
         width: "430",
        height: "70",}}>
      <div style={{marginTop:"15px"}}>

        <h2>{name}</h2>
        <p>{email}</p>
  
    </div>
    <button  onClick={handleDelete} style={{
      borderRadius:"20px",
      backgroundColor:"#040C3A",
      color:"#F5F5F5",
      marginBottom:"5px"}}>Delete</button>
    </div>)
    
  
}



export default Contact;