import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkMiddleware } from 'redux-thunk';
import axios from 'axios';


export const fetchUsers = createAsyncThunk('crud/fetchUsers', async (payload, { dispatch }) => {
    console.log("function hitted");
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
    console.log(response)
       return response.data;

})
const initialState = {
    loading: false,
    users: [],
    error: ''

}
const crudReducer = createSlice({   
    name: 'crud',
    initialState,
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.loading = true;
        }
        , [fetchUsers.fulfilled]: (state, action) => {
            console.log("payload", action.payload);
            state.users = action.payload;
            state.loading = false;
        }
        , [fetchUsers.rejected]: (state) => {
            state.loading = false;
        }

    }
 


})

export default crudReducer.reducer;