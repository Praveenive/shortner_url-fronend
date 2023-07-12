import { TextField, Typography,Button } from '@mui/material'
import React, { useState } from 'react'

export default function Redirectactivate() {
    const [email,setEmail] = useState("")
    const [error,setError] = useState("")
    const [message,setMessage] = useState("")
    const activation =async()=>{
        const mail = {email}
        const response =await fetch(`https://shortner-url-backend-5vh7.vercel.app/user/activate`,{
            method:"POST",
            body:JSON.stringify(mail),
            headers:{
                "Content-type":"application/json"
            }
        })
        const data = await response.json()
        console.log(data)
        if(!data.data){
            setError(data.message)
        }
        setError(" ")
        setMessage(data.message)

    }
  return (
    <div>
    <h1>Activate Your Email</h1>
    <h3>Confirm Your mail id</h3>
    <TextField type="email"  label="Enter Email" variant="filled" value={email}
   onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
   <Button variant='contained' onClick={activation}>Submit</Button>
   {error?<Typography>{error}</Typography>:" "}
   {message?<Typography>{message}</Typography>:" "}
</div>
  )
}
