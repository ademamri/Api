import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'

const List = () => {
    const [users, setusers] = useState([])
    useEffect(()=>{
        (async()=>{
            try{
                let result=await axios.get("https://jsonplaceholder.typicode.com/users")
                setusers(result.data)
            }
            catch(error){
                console.log(error)
            }
    })()
    },[])
  return (
    <div>
      {users.map(el=><User el={el}/>)}
    </div>
  )
}

export default List
