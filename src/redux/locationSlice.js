import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    initialState: {
        data: null,
        isLoading: false,
        error: '',
    },
    name: "location",
    reducers: {
        setLocation: (state, action) => { 
            state.data = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
            //state.error = '';
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        clearData: (state) => {
            state.data = null;
            state.isLoading = false;
            state.error = '';
        },
    },
});

export const { setLocation, setLoading, setError, clearData } = locationSlice.actions;
export default locationSlice.reducer;