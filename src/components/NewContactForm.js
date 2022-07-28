import React,{useState} from "react";
function NewContactForm({addAcontact}){

    const [contactFormData,setContactData]= useState({name:"",email: ""});
     
    function handleInputChange(event){
        setContactData({...contactFormData,[event.target.name]:event.target.value})
      }

    return(<div className="formcontainer" style={{backgroundColor:"red"}}>
              <form>
                <input placeholder="Name" name="name" value={contactFormData.name} onChange={handleInputChange}/>
                <input placeholder="Email" name="email" value={contactFormData.email} onChange={handleInputChange} />
                <input type="submit" className='submitbtn' value="Add Contact" />
              </form>
          </div>)
}

export default NewContactForm