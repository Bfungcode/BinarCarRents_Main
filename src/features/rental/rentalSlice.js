import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import rentalAPI from './rentalAPI';

export const getCars = createAsyncThunk("cars/getAll",
    async ({ name, category, isRented, minPrice, maxPrice, page, pageSize }, thunkAPI) => {
        try {
            const response = await rentalAPI.getCars(name.category, isRented, minPrice, maxPrice, page, pageSize);
            return response.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)

export const getCarById = createAsyncThunk("cars/getById",
    async ({ id }, thunkAPI) => {
        try {
            const response = await rentalAPI.getCarById(id);
            return response.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)

export const postOrder = createAsyncThunk("customer/order",
    async ({ start_rent_at, finish_rent_at, car_id }, thunkAPI) => {
        try {
            const response = await rentalAPI.postOrder(start_rent_at, finish_rent_at, car_id);
            return response.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)
export const getOrder = createAsyncThunk("customer/getOrder",
    async ({ id }, thunkAPI) => {
        try {
            const response = await rentalAPI.getOrder(id);
            return response.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)
export const uploadSlip = createAsyncThunk("customer/uploadSlip",
    async ({ id }, thunkAPI) => {
        try {
            const response = await rentalAPI.uploadSLip(id);
            return response.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)
export const deleteOrder = createAsyncThunk("customer/deleteOrder",
    async ({ id }, thunkAPI) => {
        try {
            const response = await rentalAPI.deleteOrder(id);
            return response.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)

export const listOrder = createAsyncThunk("customer/listOrder",
    async ({ id }, thunkAPI) => {
        try {
            const response = await rentalAPI.listOrder(id);
            return response.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)
//daftar semua state yang akan dipakai, didaftarkan nilai defaultnya
const initialState = {
    cars: null,
    order: null
}
const rentalSlice = createSlice({
    name: "cars",
    initialState,
    extraReducers: {
        [getCars.fulfilled]: (state, action) => {
            state.mobil = action.payload;
        },
        [getCars.rejected]: (state, action) => {
            state.mobil = null;
        },
        [getCarById.fulfilled]: (state, action) => {
            state.mobil = action.payload;
        },
        [getCarById.rejected]: (state, action) => {
            state.mobil = null;
        },
        [postOrder.fulfilled]: (state, action) => {
            state.getOrder = action.payload;
        },
        [postOrder.rejected]: (state, action) => {
            state.order = null;
        },
        [getOrder.fulfilled]: (state, action) => {
            state.order = action.payload;
        },
        [getOrder.rejected]: (state, action) => {
            state.order = null;
        },
        [uploadSlip.fulfilled]: (state, action) => {
            state.order = action.payload;
        },
        [uploadSlip.rejected]: (state, action) => {
            state.order = null;
        },
        [deleteOrder.fulfilled]: (state, action) => {
            state.order = action.payload;
        },
        [deleteOrder.rejected]: (state, action) => {
            state.order = null;
        },
        [listOrder.fulfilled]: (state, action) => {
            state.order = action.payload;
        },
        [listOrder.rejected]: (state, action) => {
            state.order = null;
        },
    }
});
const { reducer } = rentalSlice;
export default reducer;