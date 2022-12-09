import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import './Main.css';
import './data.json';



const Main = () => {
return (
  <div className="postItBoard">
    <div className="postIt"></div>
    <div className="postIt"></div>
    <div className="postIt"></div>
  </div>
  
)
  // const [contacts, setContacts]= useState()
  // const getContacts = {
  //   method: 'GET',
  //   url: './data.json'
  // }

  //   axios.request(getContacts)
  //     .then(function(response) {
  //       setContacts(response.data);
  //     } ).catch(function(error){
  //         console.error(error);
  //     })
    

  //     return (
  //         <div>
  //           {contacts.map((contact) => {
  //               console.log(contact)
  //               return (
  //                 <div key={contact._id} className="postIt" id={contact._id}>
  //                 <p>{contact.name} <br/> Connection Notes:<br/>{contact.connection}<br/>
  //                 {contact.email} <br/> {contact.github}{contact.linkedIn}</p>
  //                 </div>
  //               )
  //           })}
  //         </div>
  //     )
  };
  export default Main 
 