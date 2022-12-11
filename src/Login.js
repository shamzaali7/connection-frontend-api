
import React, {useState} from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
import app from "./Firebase-Config/config.js";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//when this is created it will need the following information incorporated

const Login = ({ setLoggedOut }) => {
    //now we have to create some functions for firebase
//these will return a promise 
// we will use async await 
// we will then create 4 states
const [registerEmail, setRegisterEmail]= useState("")
const [registerPassword, setRegisterPassword]= useState("")
const [loginEmail, setLoginEmail]= useState("")
const [loginPassword, setLoginPassword]= useState("")
const [user, setUser] = useState({})
console.log(app)
// onAuthStateChanged(app,  (currentUser)=> {
//     setUser(currentUser)
// })
const register = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    setRegisterEmail(email.value);
    try {
        await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        console.log(user)   
    }catch (error) {
        console.log(error.message)
    }
   }
   

const login = async (e) => {
    e.preventDefault()
    try {
    const user = await signInWithEmailAndPassword(
        app, 
        loginEmail,
        loginPassword 
    );

        console.log(user)   
    } catch (error) {
        console.log(error.message) 
}

}   

const logout = async (e) => {
    e.preventDefault()
    await signOut(app)
}

    return (
        <div>
            <p>Welcome</p>
            <button onClick={() => setLoggedOut(false)}>changes logged out to false</button>
                <div>
                <Box
                      component="form"sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },}}
                      noValidate
                      autoComplete="off">
                    <TextField className="form-control"
                    margin='10px'
                    id="outlined-email"
                    label="Email"
                    value={"email"}
                    onChange={(setLoginEmail)}
                    placeholder="email" name="email" type="email"></TextField>
                    
                    
                    <TextField
                    className="form-control"
                    id="outlined-password"
                    label="Password"
                    value={"password"}
                    onChange={(setLoginPassword)}
                    placeholder="password" name="password" type="password"
                    />
                    <button className='myButton' type="submit">Enter</button>
                    </Box>
                    
                </div>
                 <div>
                 <h3>Register</h3>
                 <Box
                      component="form"sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },}}
                      noValidate
                      autoComplete="off">
                    <TextField 
                    className="form-control"
                    margin='10px'
                    id="outlined-email"
                    label="Email"
                    value={"email"}
                    onChange={(setRegisterEmail)}
                    placeholder="email" name="email" type="email"></TextField>
                    
                    
                    <TextField
                    className="form-control"
                    id="outlined-password"
                    label="Password"
                    value={"password"}
                    onChange={(setRegisterPassword)}
                    placeholder="password" name="password" type="password"
                    />
                    <button className='myButton' type="submit">Enter</button>
                    </Box>
                    {/* {auth.currentUser.email} */}
                    {/*when adding {auth.currentUser.email} that is pulling asuth through the import you can now see who is signed in but when refresh it throws error . you have to implement a use state for this [user, setUser] set as oject. also want to pull from firebase library. we will call it onAuthStateChanged-- we will aso create a hook and make a callback function , set user = current user logged in. now we can just grab user.email place ? to prevent error*/}
                    {user?.email}
                    <button>Signout</button>
                </div> 
        </div>
    )
}

export default Login;