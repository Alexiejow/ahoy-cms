import React from 'react'
import { Send } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import { addQuestion } from '../../QuestionsGrid/questionsGridSlice'
import {
    selectQuestionForm,
    clearQuestionForm,
} from '../../QuestionForm/questionFormSlice'

const SubmitButton = () => {
    const newQuestion = useSelector(selectQuestionForm)
    const dispatch = useDispatch()

    const isAnyUserInputEmpty = () => {
        return Object.values({ ...newQuestion, imageUrl: 'can be empty' }).some(
            (x) => x === null || x === ''
        )
    }

    const handleSubmit = () => {
        if (isAnyUserInputEmpty()) alert('Niektóre pola są puste')
        else {
            dispatch(addQuestion(newQuestion))
            dispatch(clearQuestionForm())
        }
    }

    return (
        <Button
            variant="contained"
            endIcon={<Send />}
            sx={{ width: 200, py: 0.6 }}
            onClick={handleSubmit}
        >
            Add question
        </Button>
    )
}

export default SubmitButton
