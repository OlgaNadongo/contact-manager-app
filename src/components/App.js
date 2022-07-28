import React from 'react';
import './App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import NewContactForm from './NewContactForm';
import ContactContainer from './ContactContainer';


function App() {
  return (
    <div className="App">
         <NavBar />
         <NewContactForm />
         <ContactContainer />
         <Footer />
    </div>
  );
}

export default App;
