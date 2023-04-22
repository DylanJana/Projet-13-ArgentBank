import {createSlice} from '@reduxjs/toolkit'
import localforage from 'localforage'

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
        ...state,
        ...action.payload, userConnected: true
      }
    },
    setUserProfil: (state, {payload}) => {
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
      }
    },

    userDisconnected: (state) => {
      localforage.removeItem('token')
      return initialState
    }
  }
})

// extract action and reducer
const {actions, reducer} = userSlice
export const {setUser, setUserProfil, userDisconnected} = actions
export default reducer