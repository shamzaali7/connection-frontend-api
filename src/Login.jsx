
import React from 'react';
import { Link } from 'react-router-dom';
//when this is created it will need the following information incorporated
const Login = ({ setLoggedOut }) => {
    return (
        <div>
            <p>Welcome</p>
           
                <button onClick={() => setLoggedOut(false)}>changes logged out to false</button>
            
        </div>
    )
}

export default Login;