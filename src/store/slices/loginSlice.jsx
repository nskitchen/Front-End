import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    loginError: ""
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    },
    setLoginError: (state,action)=>{
        state.loginError = action.payload
    }
  }
})

export const { setIsAuthenticated,setLoginError } = authSlice.actions

export default authSlice.reducer