import { useNavigate } from "react-router-dom"

export default function Appbar({username}:{username:string}){
    const navigate =useNavigate()

    return <div className="flex justify-between p-5 border border-blue-200">
        <div>
            paytm
        </div>

        {username != "signin"  &&   <button
            onClick={()=>{
                localStorage.setItem("token","")
                navigate('/')
            }}
             className="border border-black rounded-sm "
        >hello {username}</button>
        }

        {username === "signin"  &&   <button
            onClick={()=>{
                navigate('/signin')
            }}
            className="border border-black rounded-sm "
        >login</button>
        }
      
    </div>
}