
import React, {useState} from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
import {auth} from './Firebase-Config/config'
import { Link } from 'react-router-dom';
//when this is created it will need the following information incorporated

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

onAuthStateChanged(auth,  (currentUser)=> {
    setUser(currentUser)
})
const register = async (e) => {
    e.preventDefault()
    try {
    const user = await createUserWithEmailAndPassword(
        auth, 
        registerEmail,
        registerPassword 
    );
        console.log(user)   
    } catch (error) {
        console.log(error.message)
}
}
const login = async (e) => {
    e.preventDefault()
    try {
    const user = await signInWithEmailAndPassword(
        auth, 
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
    await signOut(auth)
}
    return (
        <div>
            <p>Welcome</p>
            <button onClick={() => setLoggedOut(false)}>changes logged out to false</button>
            <div>
                <h3>Login</h3>
                {/* //on change added for firebase login: we are then setting the state value to whatever is written inside the input */}
            <input placeholder="Email" handleChange={(event) =>{
                setLoginEmail(event.target.value)}}/>
            <input placeholder="Pass" handleChange={(event) =>{
                setLoginPassword(event.target.value)}}/> 
            <button onClick={() => setLoggedOut(false)}>Enter</button>
            </div>
            <div>
                <h3>Register</h3>
            <input type='text' placeholder="Email" handleChange={(event) =>{
                setRegisterEmail(event.target.value)}}/>
            <input type='text' placeholder="Pass" handleChange={(event) =>{
                setRegisterPassword(event.target.value)}}/>
            <button onClick={() => setLoggedOut(false)}>Enter</button>

            <h5>Logged in as:</h5>
            {/* {auth.currentUser.email} */}
            {/*when adding {auth.currentUser.email} that is pulling asuth through the import you can now see who is signed in but when refresh it throws error . you have to implement a use state for this [user, setUser] set as oject. also want to pull from firebase library. we will call it onAuthStateChanged-- we will aso create a hook and make a callback function , set user = current user logged in. now we can just grab user.email place ? to prevent error*/}
            {user?.email}
            <button>Signout</button>
            </div>
           
            
        </div>
    )
}

export default Login;