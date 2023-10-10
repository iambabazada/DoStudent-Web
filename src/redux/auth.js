import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    user: [],
    isAuth: false
}

export const register = createAsyncThunk('register', async (data, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/users', (data))
        console.log("succes");
        return response.data
    }
    catch (err) {
        console.log(err.validationErrors.password);
        return thunkAPI.rejectWithValue(err.response?.data);
    }
})

export const login = createAsyncThunk('login', async (data, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:8080/api/v1/auth', {
            mode: 'cors',
            method: "POST",
            body: data
        })
        console.log("succes");
        return response.data
    }
    catch (err) {
        console.log(err.validationErrors.password);
        return thunkAPI.rejectWithValue(err.response?.data);
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isAuth: (state) => {
            state.isAuth = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.isAuth = true
                state.user = action.payload.user
            })
    }
})

export default authSlice.reducer

// export const { logout } = authSlice.actions


