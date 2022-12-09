import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Update() {
    const [form, setForm] = useState({
        name: '',
       connection: '',
       email: '',
       github: '',
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
        await fetch('../data.json ${params.id}`, {
           method: "DELETE",
           headers: {
             'Content-Type': 'application/json'
           },
         });
 
         navigate("/");
        } 

        async function onSubmit(e) {
            e.preventDefault();
            const editedContact = {
              name: form.name,
              connetion: form.connection,
              email: form.email,
              github: form.github,
              linkedIn: form.linkedIn,
            };

            await fetch(`../data.json/${params.id}`, {
                method: "PATCH",
                body: JSON.stringify(editedContact),
                headers: {
                  'Content-Type': 'application/json'
                },
              });
            
              navigate("/");
            }

            return (
                <div>
                  <p >Update Contact</p>
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label htmlFor="Name">Name: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Connection">Connection: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="connection"
                        value={form.connection}
                        onChange={(e) => updateForm({ connection: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={form.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="github">Github: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="github"
                        value={form.github}
                        onChange={(e) => updateForm({ github: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="linkedIn">LinkedIn: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="linkedIn"
                        value={form.linkedIn}
                        onChange={(e) => updateForm({ LinkedIn: e.target.value })}
                      />
                    </div>
              
                    <br />
              
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Update Burger"
                        className="pointerTwo"
                      />
                    </div>
             
                    <div className="delete">
                             
                             <button  onClick={handleDelete}>Delete</button> 
                             
                             
                     </div>
                  </form>


            
}