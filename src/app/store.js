import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import questionFormReducer from '../components/Dashboard/QuestionForm/questionFormSlice'
import questionCategoriesReducer from '../components/Dashboard/QuestionForm/QuestionCategorySelector/questionCategoriesSlice'
import questionsGridReducer from '../components/Dashboard/QuestionsGrid/questionsGridSlice'

const reducer = {
    questionForm: questionFormReducer,
    questionCategories: questionCategoriesReducer,
    questionsGrid: questionsGridReducer
}

export default configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
})