
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, db, logout } from "./Firebase-Config/config.js";

import { useAuthState } from "react-firebase-hooks/auth";

import { query, collection, getDocs, where } from "firebase/firestore";

//when this is created it will need the following information incorporated

const Login = ({ setLoggedOut }) => {
    //now we have to create some functions for firebase
   
        const [user, loading, error] = useAuthState(auth);
        const [name, setName] = useState("");
        const navigate = useNavigate();
      
        const fetchUserName = async () => {
          try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
      
            setName(data.name);
          } catch (err) {
            console.error(err);
            
          }
        };
      
        useEffect(() => {
          if (loading) return;
          if (!user) return navigate("/main");
          if (true === user?.uid){
            return navigate("/main")
          }
      
          fetchUserName();
        }, [user, loading]);
    

 return (
    <div>
        <p>Welcome</p>
            <button onClick={() => setLoggedOut(true)}>changes logged out to false</button>
        <div>
            <button className="login__btn login__google" onClick={signInWithGoogle}>
        Login with Google</button>
        <div className="dashboard__container">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <Link to="/Main"></Link>
    
      </div>
        </div> 
    </div>
            )
        }
    
export default Login;