import axios from "axios"
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export default function Send(){
    const [searchParams] = useSearchParams()
    const [amount,setAmount] = useState(0)
    const toUserId = searchParams.get("toUser")
    const firstname= searchParams.get("FirstName")
    const Lastname = searchParams.get("LastName")
    const navigate = useNavigate()


    return<>
        {"firstName "+firstname} {"lastname "+Lastname}
        {toUserId}
        <center>
            <div className="flex flex-col justify-center  border border-black h-80 w-80 rounded-md m-10 p-10 ">
                <input type="number"  onChange={(e)=>{setAmount(Number(e.target.value))}} placeholder="amount.." className="border border-black"/>
                <button 
                    className="border bg-blue-400 m-10"
                    
                    
                    onClick={async()=>{
                       
                        if( confirm("confirm transaction") == false){
                            alert("transaction declined")
                            navigate("/dashboard")
                            return
                        }
                        
                        const response = await axios.post("http://localhost:3001/api/v1/account/transfer",{
                            to:toUserId,
                            amount:amount
                        },{headers:{
                            Authorization:"bearer "+localStorage.getItem("token")
                        }})

                        alert(response.data.message)
                        navigate('/dashboard')
                    }}
                >Send Money to {firstname} {Lastname}</button>
            </div>
        </center>
    </>
}