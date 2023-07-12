
import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Forgotpassword() {
    const [email,setEmail] = useState("")
    const [error,setError] = useState("")
    const [message,setMessage] = useState("")
    const update = {email}
    const handleForgot = async()=>{
        const response = await fetch(`https://shortner-url-backend-xrlb-git-master-praveenive.vercel.app/reset/forgot`,{
            method:"POST",
            body:JSON.stringify(update),
            headers:{
            "Content-type":"application/json"
            }
        })
        const data =await response.json()
        console.log(data)
        if(!data){
            setError(data.message)
            setMessage(" ")
          }
          setError(" ")
          setMessage(data.message)
    }
  return (
    <div>
        <h1>Forgot Password</h1>
        <h3>Enter Your mail id</h3>
        <TextField type="email"  label="Enter Email" variant="filled" value={email}
       onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
       <Button variant='contained' onClick={handleForgot}>Submit</Button>
       {error?<Typography>{error}</Typography>:" "}
       {message?<Typography>{message}</Typography>:" "}
    </div>
  )
}
