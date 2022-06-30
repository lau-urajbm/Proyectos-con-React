import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/user/userContext'


export const Profile = () => {

  const {selectedUser}=useContext(UserContext)
  return (
    <>
    {selectedUser ? (
    <div className='card card-body text-center'>
      <img src={selectedUser.avatar} className='card-img-top rounded-circle m-auto img-fluid'></img>

      <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>

      <h3>email: {selectedUser.email}</h3>
    </div> ):(<h1>No user selected</h1>)
    }
    </>
  )
}

export default Profile