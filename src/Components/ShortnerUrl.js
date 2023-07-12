import { Button, FilledInput, FormControl, InputAdornment, InputLabel, Typography } from '@mui/material'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Shortner } from '../App';


export default function ShortnerUrl() {
  const {shortUrl,setShortUrl} = useContext(Shortner)
    const [longUrl,SetLongUrl] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/",{replace:true})
      }
    })
   let token =localStorage.getItem("token")
   console.log(token)
    const handleUrl = async()=>{
        const add = {LongUrl:longUrl}
        const res = await fetch(`https://shortner-url-backend-xrlb-git-master-praveenive.vercel.app/url/longUrl`,{
            method:"POST",
            body:JSON.stringify(add),
            headers:{
                "Content-type":"application/json",
                "x-auth-token":token
            }
        })
        const data = await res.json()
        console.log(data)
        setShortUrl(data.data.shortUrl);
       console.log(longUrl)
    }
  return (
    <div>
        <h1>ShortnerUrl</h1>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Enter Long Url</InputLabel>
          <FilledInput
            startAdornment={<InputAdornment position="start">Url here:</InputAdornment>}
            id="longurl" name="longurl" value={longUrl} onChange = {(e)=>SetLongUrl(e.target.value)}
          />
        </FormControl>
        <Button variant='contained' onClick={handleUrl}>Submit</Button><br/><br/>
        <p>Short Url</p>      
            <button onClick={()=>{
               if(shortUrl){
                {console.log(shortUrl)}
                const url =`https://shortner-url-backend-xrlb-git-master-praveenive.vercel.app/url/shorturl/`+shortUrl
                console.log(url)
                window.location.replace(url)}}}>
                  {shortUrl}</button>
    </div>
  )
}
