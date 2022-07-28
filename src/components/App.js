import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import NewContactForm from './NewContactForm';
import ContactContainer from './ContactContainer';


function App() {
  
  const[contacts, setContacts]=useState([])
   
  useEffect(()=>{
    fetch ("http://localhost:4000/contacts")
    .then(response=>response.json())
    .then(data=>setContacts(data))
    .catch(error=>console.log(error))
  },[])  

  function addAcontact(newContact){
    setContacts([...contacts,newContact])
  }

  return (
    <div className="App">
         <NavBar />
         <NewContactForm addAcontact={addAcontact}/>
         <ContactContainer contact={contacts} setContacts={setContacts}/>
         <Footer />
    </div>
  );
}

export default App;
