import React,{useState} from "react";
function NewContactForm({addAcontact}){

    const [contactFormData,setContactData]= useState({name:"",email: ""});
     
    function handleInputChange(event){
        setContactData({...contactFormData,[event.target.name]:event.target.value})
      }

      function handleFormSubmit(event){
        event.preventDefault();
        fetch('http://localhost:4000/contacts',{
          method:'POST',
          headers:{
            'Content-Type':'Application/json',
            'Accept':'Application/json'
          },
          body:JSON.stringify(contactFormData)
        })
        .then(response=>response.json())
        .then(data=>{
          setContactData({name:"",email: ""})
          addAcontact(data);
        })
        .catch(error=>console.log(error))
      }

    return(<div className="formcontainer" onSubmit={handleFormSubmit} style={{backgroundColor:"red"}}>
              <form>
                <input placeholder="Name" name="name" value={contactFormData.name} onChange={handleInputChange}/>
                <input placeholder="Email" name="email" value={contactFormData.email} onChange={handleInputChange} />
                <input type="submit" className='submitbtn' value="Add Contact" />
              </form>
          </div>)
}

export default NewContactForm