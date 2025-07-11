import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signin(){
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

   
    const navigate = useNavigate()
    return <>
    <center>
        <div className="flex flex-col h-60 w-100 border border-black rounded-xl p-4 space-y-4 m-10">

            Signin!
            <input placeholder="username"  onChange={(e)=>{setusername(e.target.value)}} className="border border-black rounded-sm"/>
           
            <input placeholder="password" onChange={(e)=>{setpassword(e.target.value)}} className="border border-black rounded-sm"/>
            <button onClick={async()=>{
                const response= await axios.post("http://localhost:3001/api/v1/user/signin",{
                    username,
                    password
                })

                localStorage.setItem("token",response.data.token)
                navigate('/dashboard')
            }} className="bg-black text-white rounded-xl">Signin</button>
            dont have account? <a onClick={()=>{navigate('/signup')}}>Sign up</a>
        </div>
        </center>
    </>
}