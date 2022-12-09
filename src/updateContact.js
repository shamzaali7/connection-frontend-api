import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
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

export default function Update() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const [form, setForm] = useState({
        name: '',
        connection: '',
        email: '',
        gitHub: '',
        linkedIn: '',
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
           body:{
              id : params.id
           }
         });
 
         navigate("/");
        } 

        async function onSubmit(e) {
            e.preventDefault();
            const editedContact = {
              name: form.name,
              connetion: form.connection,
              email: form.email,
              gitHub: form.gitHub,
              linkedIn: form.linkedIn,
            };

            await fetch(`https://connection-backend-api.herokuapp.com/api/contact`, {
                method: "PATCH",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: {
                  id : params.id,
                  name: editedContact.name,
                  connection: editedContact.connection,
                  email: editedContact.email, 
                  gitHub: editedContact.gitHub,
                  linkedIn: editedContact.linkedIn,
                  links: editedContact.links
                 }
              });
            
              navigate("/");
            }

            return (
                <div>
                  <p>Update Contact</p>
                  <Button onClick={handleOpen}>x</Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={style}>
          <Button onClick={handleClose}>x</Button>
                  <form onSubmit={onSubmit}>
                    
                    <div className="form-item">
                      <label htmlFor="Name">Name: </label>
                      <input type="text" className="form-input" id="name" value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })} />
                    </div>
                    
                    <div className="form-item">
                      <label htmlFor="Connection">Connection: </label>
                      <input
                        type="text"
                        className="form-input"
                        id="connection"
                        value={form.connection}
                        onChange={(e) => updateForm({ connection: e.target.value })}
                      />
                    </div>
                    
                    <div className="form-item">
                      <label htmlFor="email">Email: </label>
                      <input
                        type="text"
                        className="form-input"
                        id="email"
                        value={form.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                      />
                    </div>
                    
                    <div className="form-item">
                      <label htmlFor="github">Github: </label>
                      <input
                        type="text"
                        className="form-input"
                        id="github"
                        value={form.gitHub}
                        onChange={(e) => updateForm({ gitHub: e.target.value })}
                      />
                    </div>
                 
                    <div className="form-item">
                      <label htmlFor="linkedIn">LinkedIn: </label>
                      <input
                        type="text"
                        className="form-input"
                        id="linkedIn"
                        value={form.linkedIn}
                        onChange={(e) => updateForm({ LinkedIn: e.target.value })}
                      />
                    </div>
              
                    <br />
              
                    <div className="form-item">
                      <input
                        type="submit"
                        value="Update Contact"
                        className="submitBtn"
                      />
                    </div>
             
                    <div className="form-item">
                             
                             <button  onClick={handleDelete}>Delete</button> 
                             
                             
                     </div>
                  </form>
                  </Box>
                  </Modal>
                  </div>
            )
                  


            
}