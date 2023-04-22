import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer/userReducer'

const store = configureStore({
  reducer : {
    userInfos: userReducer
  }
})

export default store