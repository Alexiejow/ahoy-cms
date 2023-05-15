import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import * as herokuApi from '../../../api/herokuApi'

import {
    mapApiQuestionToView,
    mapViewQuestionToPostApi,
    mapGetApiQuestionsToView,
} from "../../../mappers/questionsMapper"

const initialState = [{
    answers: [],
    body: "",
    categoryName: "",
    dateCreated: "",
    id: 1,
    imageUrl: ""
}]

export const fetchQuestions = createAsyncThunk(
    'questionsGrid/fetchQuestions',
    async () => {
        try {
            const { data } = await herokuApi.fetchAllQuestions()
            return mapGetApiQuestionsToView(data)
        } catch (error) {
            alert(error)
        }
    }
)

export const addQuestion = createAsyncThunk(
    'questionsGrid/addQuestion',
    async (question) => {
        try {
            const questionMapped = mapViewQuestionToPostApi(question)
            const { data } = await herokuApi.addQuestion(questionMapped)
            return mapApiQuestionToView(data[0])
        } catch (error) {
            alert(error)
        }
    }
)

export const updateQuestion = createAsyncThunk(
    'questionsGrid/updateQuestion',
    async (question) => {
        try {
            console.log('updateQ: ', question)
            const { data } = await herokuApi.updateQuestion(question)
            return mapApiQuestionToView(data)
        } catch (error) {
            alert(error)
        }
    }
)

export const questionsGridSlice = createSlice({
    name: 'questionsGrid',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state = action.payload
                return state
            })
            .addCase(addQuestion.fulfilled, (state, action) => {
                const newQuestion = action.payload
                return [...state, newQuestion]
            })
            .addCase(updateQuestion.fulfilled, (state, action) => {
                const { id } = action.payload
                const index = state.findIndex(question => question.id === id)
                state[index] = action.payload
                return state
            })
    },
})

export const selectQuestionsGrid = (state) => state.questionsGrid

export default questionsGridSlice.reducer
