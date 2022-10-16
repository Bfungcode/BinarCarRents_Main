import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message-slice';
import authAPI from './authAPI';


const user = JSON.parse(localStorage.getItem('user'));

export const login = createAsyncThunk("customer/auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const data = await authAPI.login(email, password);
            return { user: data };
        }
        catch (err) {
            const message = (
                err.response && err.response.data && err.response.data.message) ||
                err.message || err.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    });

export const register = createAsyncThunk("customer/auth/register",
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await authAPI.register(email, password);
            thunkAPI.dispatch(setMessage(response.data.message));
        }
        catch (err) {
            const message = (
                err.response && err.response.data && err.response.data.message) ||
                err.message || err.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    });


const initialState = user ? { isLoggedIn: true, user } :
    { isLoggedIn: false, user: null };
//user && localstorage.getItem()


const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {

        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
        },
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
        },
    }
});

const { reducer } = authSlice;

export default reducer;
