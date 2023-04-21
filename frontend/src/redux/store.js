import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer/userReducer'

console.log("USERREDUCER ", userReducer)

const store = configureStore({
  reducer : {
    userInfos: userReducer
  }
})

export default store