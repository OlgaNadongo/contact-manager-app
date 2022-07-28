// import React, {useState, useEffect} from 'react';
// import './App.css';
// import Footer from './Footer';
// import NavBar from './NavBar';
// import NewContactForm from './NewContactForm';
// import ContactContainer from './ContactContainer';


// function App() {
  
//   const[contacts, setContacts]=useState([])
   
//   useEffect(()=>{
//     fetch ("http://localhost:4000/contacts")
//     .then(response=>response.json())
//     .then(data=>setContacts(data))
//     .catch(error=>console.log(error))
//   },[])  

//   function addAcontact(newContact){
//     setContacts([...contacts,newContact])
//   }

//   return (
//     <div className="App">
//          <NavBar />
//          <NewContactForm addAcontact={addAcontact}/>
//          <ContactContainer contact={contacts} setContacts={setContacts}/>
//          <Footer />
//     </div>
//   );
// }

// export default App;


import React,{useEffect, useState} from 'react';
import './App.css';
import ContactContainer from './ContactContainer';
import NewContactForm from './NewContactForm'



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
    <div style={{
      background: "#040C3A",
      width: "450",
      height: "636",
      borderRadius: "10px",
      color:"#FCF9F9",
      alignItems: "center",
      justifyContent:"center",
      marginLeft:"150"
    }}>
       {/* <Header /> */}
       <NewContactForm addAcontact={addAcontact}/>
       <ContactContainer contacts={contacts} setContacts={setContacts}  />
       
       
    </div>)
  
}

export default App;

