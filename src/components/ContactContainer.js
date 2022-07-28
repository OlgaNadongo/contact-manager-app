import React from 'react';
import Contact from './Contact'


function ContactContainer({contacts, setContacts}) {
  return (
    <div className='contactscontainer'>  
         <input type="text" className='searchContent' placeholder='Search...'  />
         <div>
          
        {
          contacts.map(contact=><Contact key={contact.id} id={contact.id} name={contact.name} email={contact.email} />
      )}
        </div>
       
    </div>
  );
}

export default ContactContainer;