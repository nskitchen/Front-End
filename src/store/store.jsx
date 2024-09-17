import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/loginSlice'

export default configureStore({
  reducer: {
    auth:authSlice.reducer
  }
})