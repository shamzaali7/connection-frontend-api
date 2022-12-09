import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import './Main.css';
import './data.json';
import Create from './createContact'
import Update from './updateContact'


const Main = () => {


  const [contacts, setContacts]= useState()
  const [loading, setLoading] = useState(false)
  const getContacts = {
     method: 'GET',

    url: 'https://connection-backend-api.herokuapp.com/api/contact'
  }

  useEffect(()=> {
    axios.request(getContacts)

       .then(function(response) {
       setContacts(response.data);
       setLoading(true)
      } ).catch(function(error){
          console.error(error);
       })
     }, [])
  

      return (
          <div className="postItBoard">
            <div className="postIt"><button><Create/></button></div>
            {loading && 
                contacts.map((contact) => {
                console.log(contact)
                return (
                  <div key={contact._id} className="postIt" id={contact._id}>
                  <p className="name">{contact.name}</p> 
                  <p className="postItNotes"> Connection Notes:<br/>
                  {contact.connection}<br/>
                  {contact.email} <br/>
                  <a href={contact.github}>GH</a>
                  <a href={contact.linkedIn}>/in</a>
                  </p>
                  <Link to={"/main/" + contact._id}><Update><button>Edit</button></Update></Link> 
                  </div>
                )
            })}
          </div>
      )
  };
  export default Main 
 