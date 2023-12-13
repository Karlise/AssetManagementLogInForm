import { FormEvent, useState } from 'react';
import './login-style.css';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({email: "", password: ""})
    const [err, setErr] = useState("")
    function handleLogin(e: FormEvent)
    {
        e.preventDefault()
        setErr("")
        if(loginData.email.trim() == "")
        {
            setErr("Email address is required please!")
            return;
        }
        if(loginData.password.trim() == "")
        {
            setErr("Password is required please!")
            return;
        }
        navigate("/success")
    }

  return (
    <div className="container">
        <div className="login-container">
            
            <form id='login-form' onSubmit={(e)=>handleLogin(e)}>
                <h1>Login</h1>
                <input type="text" id="emailInput" placeholder='Enter your email here' onChange={(e)=>setLoginData({...loginData, email: e.target.value})} value={loginData.email}/>
                <input type="password" id="passwordInput" placeholder='Enter your password here' onChange={(e)=>setLoginData({...loginData, password: e.target.value})} value={loginData.password}/>
                {err && <p id='errorTxt'>{err}</p>}
                <button id='login-button'>Log in</button>
            </form>
            
        </div>
    </div>
  )
}


export default Login
