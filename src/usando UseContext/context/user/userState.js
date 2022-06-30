import React, {useReducer} from 'react'
import UserContext from './userContext'
import UserReducer from './userReducer'
import axios from 'axios'
import { GET_PROFILE, GET_USERS } from '../types'

export const UserState = (props) => {

    const initialState={
        users : [],
        selectedUser : null,
    }
    
    const getUsers = async ()=>{
        const res = await axios.get('https://reqres.in/api/users')
        console.log(res.data.data)

        dispatch({
            type:GET_USERS,
            payload:res.data.data
        })
    }
    
    const getProfile = async (id)=>{
        const res = await axios.get(`https://reqres.in/api/users/${id}`)
        

        dispatch({
            type:GET_PROFILE,
            payload:res.data.data
        })
    
    }
    
    const [state, dispatch] = useReducer(UserReducer, initialState)
    
    
  return (
    <UserContext.Provider value={{
        users : state.users,
        selectedUser:state.selectedUser,
        getUsers,
        getProfile
    }}>
        {props.children}

    </UserContext.Provider>
  )
}

export default UserState
