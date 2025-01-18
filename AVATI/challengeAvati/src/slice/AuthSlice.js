import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import authService from "../services/AuthService"

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

const initialState = {
    user : user ? user :  null,
    error: null,
    succes: false,
    loading: false
}

export const register = createAsyncThunk("auth/register",
    async(user, thunkAPI) => {
        const data = await authService.register(user)

        if(data.errors){
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data;
    }
)

export const logout = createAsyncThunk("auth/logout",
    async() => {
        await authService.logout()
    }
)

export const login = createAsyncThunk("auth/login",
    async(user, thunkAPI) => {
        const data = await authService.login(user)

        if(data.errors){
            console.log(data.errors)
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset:(state) => {
            state.loading = false,
            state.error = false, 
            state.success = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.error = false
        }).addCase(register.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.error = false
            state.user = action.payload
        }).addCase(register.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.success = false
            state.user = null
        }).addCase(logout.fulfilled, (state) => {
            state.loading = false
            state.error = false
            state.succes = true
            state.user = null
        }).addCase(login.fulfilled, (state, action) => {
            state.succes = true
            state.user = action.payload
            state.error = false
            stete.loading = false
        }).addCase(login.pending, (state, action) => {
            state.loading = true
            state.error = false
        }).addCase(login.rejected, (state, action) => {
            state.loading = false
            state.user = null
            state.error = action.payload
            state.succes = false
        })
    }
})


export const { reset } = authSlice.actions
export default authSlice.reducer