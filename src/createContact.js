import React, {useState } from 'react';
import { useNavigate } from "react-router";
export default function Create() {
    const [form, setForm] = useState({
        name: "",
        connection: "",
        email: "",
        github: "",
        linkedIn: "",
    });

    const navigate =useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return {...prev, ...value};
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newContact = {...form};

        await fetch("https://connection-backend-api.herokuapp.com/api/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newContact),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({ name: "", connection: "", email: "", github: "", linkedIn: ""})
        navigate("/");
    }

    return (
        <div>
            <h1>New Contact</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" className="formInput" value={form.name} onChange={(e) => updateForm({ name: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='connection'>Connection:</label>
                    <input type="text" className="formInput" value={form.connection} onChange={(e) => updateForm({ connection: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type="text" className="formInput" value={form.email} onChange={(e) => updateForm({ email: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='github'>Github:</label>
                    <input type="text" className="formInput" value={form.github} onChange={(e) => updateForm({ github: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='linkedIn'>LinkedIn:</label>
                    <input type="text" className="formInput" value={form.linkedIn} onChange={(e) => updateForm({ linkedIn: e.target.value})} />
                </div>
                <div>
                    <input type="submit" value="Create Contact" className="button"/>
                </div>
            </form>
        </div>
    );
}

