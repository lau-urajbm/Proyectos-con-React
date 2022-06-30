import React from 'react'
import Profile from './Profile'
import UserList from './UserList'
import { UserState } from '../context/user/userState'
import 'bootstrap/dist/css/bootstrap.min.css'
export const Contenedor = () => {
  return (
    <UserState>
      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-7'>
          <UserList/>
          </div>
          <div className='col-md-5'>
          <Profile/>
        </div>
        </div>
        
      </div>
        
        
    </UserState>
    
  )
}
