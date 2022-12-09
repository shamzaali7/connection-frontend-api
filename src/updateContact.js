import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Update() {
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

    async function handleDelete () {
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
                  <p >Update Contact</p>
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
                  </div>
            )
                  


            
}