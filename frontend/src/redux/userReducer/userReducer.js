import {createSlice} from '@reduxjs/toolkit'

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
      console.log("state ", state)
      return {
        ...action.payload, userConnected: true
      }
    }
  }
})

// extract action and reducer
const {actions, reducer} = userSlice
export const {setUser} = actions
export default reducer