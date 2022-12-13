import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import './App.css';
import './Main.css';
import './data.json';
import Create from './createContact'
import Update from './updateContact'
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';



const Main = () => {


  const [contacts, setContacts]= useState()
  const [loading, setLoading] = useState(false)
  const getContacts = {
     method: 'GET',
     url: 'https://connection-backend-api.herokuapp.com/api/contact'
  }

  useEffect(()=> {
        getNewContacts()
     }, [])

  function getNewContacts(){
    axios.request(getContacts)
       .then(function(response) {
       setContacts(response.data);
       setLoading(true)
      } ).catch(function(error){
          console.error(error);
       })
  }

      return (
          <div className="postItBoard">
            <div className="postIt"><button><Create getNewContacts={getNewContacts}/></button></div>
            {loading && 
                contacts.map((contact) => {
                console.log(contact)
                return (
                  
                  <div key={contact._id} className="postIt" id={contact._id}>
                    
                  <header1 className="name">{contact.name}</header1> 
                  <form className="postItNotes">
                    <div className="connection-container">
                      <div className="connection-notes"><h4>Connection Notes:</h4></div>
                      <div><Box>{contact.connection}</Box></div>
                    </div>
                  </form>
                  <form>
                    <Box>
                      <div className="links-container">
                        <div><a href={contact.email}><AiOutlineMail color="black" fontSize="2em" /></a></div>
                        <div><a href={contact.github}><AiFillGithub color="black" fontSize="2em" /></a></div>
                        <div><a href={contact.linkedIn}><AiFillLinkedin color="black" fontSize="2em" /></a></div>
                      </div>
                    </Box>
                  </form>
                  <div className="edit-button-container">
                    <div><Link to={'/main/' + contact._id}><button className="edit-button">Edit</button></Link></div>
                  </div>
                  {/* <Update contact={contact}><button>Edit</button></Update>  */}
                  </div>   
                )
            })}
          </div>
      )
  };
  export default Main 
 