import { TextField ,Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Resetpassword() {
    const [password,setPassword]=useState("")
    const {id} =useParams()
    const navigate = useNavigate()
    const resetpassword = async()=>{
        const update = {password}
        const response = await fetch(`https://shortner-url-backend-xrlb-git-master-praveenive.vercel.app/user/resetpassword/${id}`,{
            method:"PUT",
            body:JSON.stringify(update),
            headers:{
                "Content-type":"application/json"
            }
        })
        const data = await response.json()
        console.log(data)
        setPassword(data.data)
        navigate("/")
    }
  return (
    <div>
        <h1>Reset Password</h1>
        <TextField type="password"  label="Enter new Password" variant="filled" value={password}
       onChange={(e)=>setPassword(e.target.value)}/> <br/><br/>
       <Button variant='contained' onClick={resetpassword}>Submit</Button>
    </div>
  )
}