
import React,{useEffect, useState} from 'react';
import './App.css';
import ContactContainer from './ContactContainer';
import NewContactForm from './NewContactForm'
import Footer from './Footer';
import NavBar from './NavBar';
import About from './About';
import {Route, Routes} from "react-router-dom"
import ErrorPage from './ErrorPage';



function App() {

  const[contacts, setContacts]=useState([])
 
 
 

  useEffect(()=>{
    fetch ("https://agile-plains-31264.herokuapp.com/contacts")
    .then(response=>response.json())
    .then(data=>setContacts(data))
    .catch(error=>console.log(error))
  },[])



  function addAcontact(newContact){
    setContacts([...contacts,newContact])
  }

  return (
    <div>
          <NavBar />
        
          
          <Routes>
              <Route path="/" element={ <><NewContactForm addAcontact={addAcontact}/>
          <ContactContainer contacts={contacts} setContacts={setContacts}  /></>} />

              <Route path="/contacts" element={ <ContactContainer contacts={contacts} setContacts={setContacts}  />}/>
              <Route path="/about" element={<About />}/>
              <Route path="*" element={<ErrorPage/>}/>
          </Routes>
           
          <Footer />
       
    </div>)
  
}

export default App;

