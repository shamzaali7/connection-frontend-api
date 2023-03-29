
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./Firebase-Config/AuthContext.js";
import Intro from './Intro'


import './Login.css'



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await signIn(email, password);
        navigate("/main/");
      } catch (e) {
        setError(e.message);
        
      }
    };
          return (
            <div className="max-w-[700px] mx-auto my-16 p-4">
              <div>
                <h1 className="text-2xl font-bold py-2">
                  Sign in to your account
                </h1>
                <p className="py-2">
                  Don't have an account yet?{" "}
                  <Link to="/signup">
                    <button className="bg-indigo-200 text-blue-600 text-sm hover:bg-indigo-500 hover:text-black leading-6 font-medium py-2 px-3 rounded-lg">
                      Sign up
                    </button>
                  </Link>
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col py-2">
                  <label className="py-2 font-medium">Email Address</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-3"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 font-medium">Password</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-3"
                    type="password"
                  />
                </div>
                <button className="border border-blue-500 bg-blue-600 hover:bg-indigo-500 w-full p-4 hover:text-black my-2 rounded-lg text-white">
                   Sign In
                </button>
              </form>
            </div>
          );
};

export default Login;