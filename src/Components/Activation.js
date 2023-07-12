import { Autocomplete, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const account = ["activate","deactivate"]
export default function Activation() {
const [accountStatus,setAccountStatus]= useState(null)
const navigate=useNavigate()
const [error,setError] = useState("")
const {id} =useParams()
    const accountActive = async()=>{
        const update = {accountStatus}
        const res = await fetch(`https://shortner-url-backend-xrlb-git-master-praveenive.vercel.app/user/activatestatus/${id}`,{
            method:"PUT",
            body:JSON.stringify(update),
            headers:{
                "Content-type":"application/json"
            }
        })
        const data = await res.json();
        console.log(data.data.accountStatus)
        if(data.data.accountStatus=="activate")
        {
            setAccountStatus(data.accountStatus)
            setError(data.message)
            navigate("/")
        }
    }
  return (
    <div>
    <h1>Activate Your Email-id</h1>
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={account}
    value={accountStatus}
    onChange={(event, newValue) => setAccountStatus(newValue)}
    renderInput={(params) => <TextField {...params} label="Account status" />}
  /><br/>
  <Button variant='contained' onClick={accountActive}>Submit</Button>
  {error?<Typography variant="body1" 
  color="error">{error}</Typography>:" "}
  </div>
  )
}
