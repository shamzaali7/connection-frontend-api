import React from 'react'
import './App.css'
import './Main.css'
import './data.json'



const Main = () => {
  return (
    async function getContacts() {
      fetch('./data.json')
        .then(function(resp) {
          return resp.json();
        })
        .then(function(contacts) {
          console.log (contacts)
     //above DELETE  using fetch  to get json 
     //Below KEEP map to create postits  
          contacts.map((contact)=> {
      console.log(contact)
      return (
        <div key={contact._id} className="postIt" id={contact._id}>
          <p>{contact.name} <br/> Connection Notes:<br/>{contact.connection}<br/>
          {contact.email} <br/> {contact.github}{contact.linkedIn}</p>
        </div>
      )
    })
  })
    })
};
  export default Main 
 