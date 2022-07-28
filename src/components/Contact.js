import React from "react";

function Contact({id,name,email, deleteAcontact}){


    function handleDelete(){
        fetch(` http://localhost:000/contacts/${id}`,{
          method:'DELETE'
        })
        .then(response=>response.json())
        .then(data=>deleteAcontact(id))
        .catch(error=>console.log(error))
      }



    return (
        <div 
                style={{
                background:"#2F96B2",
                width: "430",
                height: "70",}} >
            <div
               >
                <h2>name</h2>
                <p>email</p>
            </div>
            
              <button 
                    style={{borderRadius:"20",
                    backgroundColor:"#040C3A",
                    color:"#F5F5F5"}}>
                    Delete
                    </button>

        </div>
        
    )
}

export default Contact;