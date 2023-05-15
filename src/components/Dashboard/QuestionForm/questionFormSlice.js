import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import * as S3Api from '../../../api/S3Api'

const initialState = {
    categoryId: '',
    body: '',
    correctAnswer: '',
    incorrectAnswer1: '',
    incorrectAnswer2: '',
    imageUrl: '',
}

export const uploadImage = createAsyncThunk(
    'questionForm/uploadImage',
    async (image) => {
        try {
            const { data } = await S3Api.getImageUploadPresignedUrl()
            await S3Api.uploadImage(data.uploadURL, image)
            return S3Api.createImageUrl(data.Key)
        } catch (error) {
            alert(error)
        }
    }
)

export const questionFormSlice = createSlice({
    name: 'questionForm',
    initialState,
    reducers: {
        updateQuestionForm: (state, action) => {
            state = { ...state, [action.payload.name]: action.payload.value }
            return state
        },
        clearQuestionForm: () => {
            return initialState
        },
    },
    extraReducers: builder => {
      builder
        .addCase(uploadImage.fulfilled, (state, action) => {
          state = {...state, imageUrl: action.payload}
          return state
        })
        .addCase(uploadImage.pending, (state) => {
          state = {...state, imageUrl: 'pending'}
          return state
        })
    }
})

export const { updateQuestionForm, clearQuestionForm } = questionFormSlice.actions

export const selectQuestionForm = (state) => state.questionForm

export default questionFormSlice.reducer