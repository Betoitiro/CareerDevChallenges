import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/AuthService";

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
    user: user || null,
    error: null,
    success: false,
    loading: false,
};

// Thunk para registro
export const register = createAsyncThunk("auth/register",
    async (user, thunkAPI) => {
        const data = await authService.register(user)

        //check errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data
    }
)

// Thunk para logout
export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout();
});

// Thunk para login
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
        const data = await authService.login(user);
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// Slice de autenticação
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = null;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // Casos para registro
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
                state.user = null;
            })
            // Casos para logout
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.user = null;
            })
            // Casos para login
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.payload;
                state.success = false;
            });
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
