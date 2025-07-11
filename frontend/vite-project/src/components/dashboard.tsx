import { useEffect, useState } from "react";
import Appbar from "./appbar";
import axios from "axios";
import SearchBar from "./searchbar";



interface UserDetail{
    balance:number,
    detail:{
        
        username:string,
        lastname:string,
        firstname:string,

    }

}
export default function Dashboard(){
    const [user,setUser] = useState<UserDetail>()

    const GetUserDetail = async  () => {
        const response = await axios.get("http://localhost:3001/api/v1/account/balance",{headers:{Authorization:"bearer "+localStorage.getItem("token")}})
        setUser(response.data)
        console.log(user)
    }

    useEffect(()=>{
        GetUserDetail()
    },[])
    
    return <div className="p-5">

            {user &&  <Appbar username={user.detail.username} /> }
            {!user &&  <Appbar username="signin" /> }

       
       

            <h2 className="my-3">Total balance = {user?.balance}</h2>
         
        
        <SearchBar/>
        
    </div>
}