import {createSlice} from '@reduxjs/toolkit'
import localforage from "localforage"

// Create my initial state
const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  userConnected: false,
  token: null
}

const userSlice = createSlice({
  name:'userInfos',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...action.payload, userConnected: true
      }
    },
    userDisconnected: (state) => {
      console.log("IN DISCONNECT")
      localforage.removeItem('token')
      return initialState
    }
  }
})

// extract action and reducer
const {actions, reducer} = userSlice
export const {setUser, userDisconnected} = actions
export default reducer