import AuthService from "../services/AuthServices";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const authService = AuthService();
export const loginAction = createAsyncThunk("auth/login", async (payload, thunkAPI) => {
    try {
        const result = await authService.login(payload);
        return result;
    } catch (err) {
        thunkAPI.rejectWithValue(err.message);
    }
});

export const registerAction = createAsyncThunk("auth/register", async (payload, thunkAPI) => {
    try {
        const result = await authService.register(payload);
        return result;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    extraReducers: (builder) => {
        builder.addCase(loginAction.fulfilled, (state, { payload }) => {
            state.user = payload;
        })
    }
});

export default authSlice;