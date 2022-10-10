import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice';
import messageReducer from './features/auth/message-slice';
import rentalReducer from './features/rental/rentalSlice';
export default configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer,
        rental: rentalReducer,
    }
})
