
import React,{useState} from 'react';
import Contact from './Contact';




function ContactContainer ({contacts,setContacts}) {

  const [filter, setFilterItem]=useState('')
   
//implementing delete
    function deleteAcontact(id){
        setContacts(contacts.filter(contact=>contact.id !== id));
        }  

      
    //implementing search
      function  searchText(e){
         setFilterItem(e.target.value)
      }

     let  contactSearch=contacts.filter(contact=>{
      return Object.keys(contact).some(key=>
        contact[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        
        )
     })
     

  return (
    <div className='contactscontainer'>

          <input type="text" className='searchContent' placeholder='Search...' value={filter}  onChange={searchText.bind(this)} />

        <div 
            className="contactbox"
            style={{
            marginLeft:"2" }}>
          
        {
          contactSearch.map(contact=><Contact key={contact.id} id={contact.id} name={contact.name} email={contact.email} deleteAcontact={deleteAcontact} />
      )}
        </div>
       

       
    </div>)
  
}

export default ContactContainer;