import React, { useState, useEffect } from "react";
import { useParams, useNavigate, json } from "react-router";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Update({contact}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const [form, setForm] = useState({
        name: contact.name,
        connection: contact.connection,
        email: contact.email,
        github: contact.github,
        linkedIn: contact.linkedIn,
    });

    const params = useParams();
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev)=>{
            return { ...prev, ...value };
        });
    }

    async function handleDelete (e) {
      e.preventDefault()
      await fetch(`https://connection-backend-api.herokuapp.com/api/contact`, {
         method: "DELETE",
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({id : params.id})
       });
       navigate("/main");
      } 

      async function onSubmit(e) {
          e.preventDefault();
          const editedContact = {
            id: params.id,
            name: form.name,
            connection: form.connection,
            email: form.email,
            github: form.github,
            linkedIn: form.linkedIn
          };
        
          await fetch(`https://connection-backend-api.herokuapp.com/api/contact`, {
              method: "PUT",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(editedContact)
            });
          
            navigate("/main");
          }

            return (
                <div>
            {setTimeout(handleOpen, 100)}    
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={style}>
                  <form onSubmit={onSubmit}>
                    
                    <div className="formItem">
                      <label>Name: </label>
                        <input  type="text" className="formInput" id="name"  value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })} />
                    </div>
                    
                    <div className="formItem">
                      <label htmlFor="Connection">Connection: </label>
                      <input
                        type="text"
                        className="formInput"
                        id="connection"
                        value={form.connection}
                        onChange={(e) => updateForm({ connection: e.target.value })}
                      />
                    </div>
                    
                    <div className="formItem">
                      <label htmlFor="email">Email: </label>
                      <input
                        type="text"
                        className="formInput"
                        id="email"
                        value={form.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                      />
                    </div>
                    
                    <div className="formItem">
                      <label htmlFor="github">Github: </label>
                      <input
                        type="text"
                        className="formInput"
                        id="github"
                        value={form.github}
                        onChange={(e) => updateForm({ github: e.target.value })}
                      />
                    </div>
                 
                    <div className="formItem">
                      <label htmlFor="linkedIn">LinkedIn: </label>
                      <input
                        type="text"
                        className="formInput"
                        id="linkedIn"
                        value={form.linkedIn}
                        onChange={(e) => updateForm({ LinkedIn: e.target.value })}
                      />
                    </div>
              
                    <br />
              
                    <div className="formItem">
                       
                     <Button onClick= {onSubmit}>Update Contact</Button>
                   
                    </div>
             
                    <div className="formItem">                            
                             <Button  onClick={handleDelete}>Delete</Button>
                              <Button  onClick={(e) => navigate(-1)}>Cancel</Button> 
                     </div>
                  </form>
                  </Box>
                  </Modal>
                  </div>
            )
      
}