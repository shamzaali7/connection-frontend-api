import React, {useState } from 'react';
import { useNavigate } from "react-router";
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

export default function Create({getNewContacts}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [form, setForm] = useState({
        name: "",
        connection: "",
        email: "",
        github: "",
        linkedIn: "",
    });

    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return {...prev, ...value};
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newContact = {...form};

        await fetch("https://connection-backend-api.herokuapp.com/api/contact/", {
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

        getNewContacts();
        setForm({ name: "", connection: "", email: "", github: "", linkedIn: ""})
        navigate("/");
    }

    return (
        <div>
            <h1>New Contact</h1>
            <Button onClick={handleOpen}>Click here!</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
            <Box sx={style}>
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
            </Box>
            </Modal>
        </div>
    );
}

