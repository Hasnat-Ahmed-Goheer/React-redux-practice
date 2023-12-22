import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    isVisible: false,
    notification:null,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showNotification(state,action) {
        state.notification = {
            title: action.payload.title,
            message: action.payload.message,
            status: action.payload.status,
        }
        },

        toggle(state) {
            state.isVisible = !state.isVisible
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;