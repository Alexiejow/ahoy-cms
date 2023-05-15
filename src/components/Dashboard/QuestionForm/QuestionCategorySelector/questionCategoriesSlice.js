import * as api from '../../../../api/herokuApi'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCategories = createAsyncThunk(
    'questionCategories/fetchCategories',
    async () => {
        try {
            const { data } = await api.fetchAllCategories()
            return data
        } catch (error) {
            alert(error)
        }
    }
)

export const questionCategoriesSlice = createSlice({
    name: 'questionCategories',
    initialState: [{ id: '', category: '' }],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => action.payload)
    },
})

export const selectCategories = (state) => state.questionCategories

export default questionCategoriesSlice.reducer
