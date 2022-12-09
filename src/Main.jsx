import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import './Main.css';
import './data.json';



const Main = () => {
// return (
//   <div className="postItBoard">
//     <div className="postIt"></div>
//     <div className="postIt"></div>
//     <div className="postIt"></div>
//   </div>
  
// )
  const [contacts, setContacts]= useState()
  const [loading, setLoading] = useState(false)
  const getContacts = {
    method: 'GET',
    url: 'http://localhost:4000/api/contact'
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
            {loading && 
                contacts.map((contact) => {
                console.log(contact)
                return (
                  <div key={contact._id} className="postIt" id={contact._id}>
                  <p>{contact.name} <br/> Connection Notes:<br/>{contact.connection}<br/>
                  {contact.email} <br/> {contact.github}{contact.linkedIn}</p>
                  <Link to={"/main/" + contact.id}><button>Edit</button></Link> 
                  </div>
                )
            })}
          </div>
      )
  };
  export default Main 
 