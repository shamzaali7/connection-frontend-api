//when this is created it will need the following information incorporated
const Login = ({ setLoggedOut }) => {
    return (
        <div>
            <Link to='main'>
                <p  onClick={() => setLoggedOut(false)}>see my contacts</p>
            </Link>
        </div>
    )
}

export default Login;