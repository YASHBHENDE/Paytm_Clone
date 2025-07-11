import axios from "axios"
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export default function Signup(){
    const [username,setusername] = useState('')
    const [firstname,setfirstname] = useState('')
    const [lastname,setlastname] = useState('')
    const [password,setpassword] = useState('')

   
    const navigate = useNavigate()
    return <>
    <center>
        <div className="flex flex-col h-100 w-100 border border-black rounded-xl p-4 space-y-4 m-10">

            Signup!
            <input placeholder="username"  onChange={(e)=>{setusername(e.target.value)}} className="border border-black rounded-sm"/>
            <input placeholder="firstname" onChange={(e)=>{setfirstname(e.target.value)}}  className="border border-black rounded-sm"/>
            <input placeholder="lastname" onChange={(e)=>{setlastname(e.target.value)}} className="border border-black rounded-sm"/>
            <input placeholder="password" onChange={(e)=>{setpassword(e.target.value)}} className="border border-black rounded-sm"/>
            <button onClick={async()=>{
                const response= await axios.post("http://localhost:3001/api/v1/user/signup",{
                    username,
                    firstname,
                    lastname,
                    password
                })

                localStorage.setItem("token",response.data.token)
                navigate('/dashboard')
            }} className="bg-black text-white rounded-xl">Signup</button>
            already have account? <a onClick={()=>{navigate('/signin')}}>log in</a>
        </div>
        </center>
    </>
}