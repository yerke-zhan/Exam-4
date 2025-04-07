import React,{useState, useEffect} from 'react'
import {Link,  useNavigate } from 'react-router-dom'


export default function Login({setAuth}) {
    let navigate = useNavigate()
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

   
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password.length<4) {
            setMessage('Password must be at least 4 characters long')

            return
        }
        if(email.includes('@') ){
            setMessage('')
            login()
        }else{
            setMessage('Please enter a valid email')
        }
    }

    const login = () => {
        setAuth(true)
        navigate('/home')
    }

    
   
       
    
      useEffect(() => {
        console.log('NewUser component mounted')
        return () => {
          console.log('NewUser component unmounted')
        }
      }, [])


   
  return (
    <div>
      <h1>Welcome Back</h1>
      <p>Login to your BookSelf account</p>
      <form  onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {message && <p style={{ color: 'red' }}>{message} </p>}
    </div>
  )
}
