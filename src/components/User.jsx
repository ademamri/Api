import React from 'react'

const User = ({el}) => {
  return (
    <div className='user'>
      <h1>{el.name}</h1> 
    <h1>{el.username}</h1>
      <h2>{el.email}</h2>
      <h2>{el.phone}</h2>
    
    </div>
  )
}

export default User
