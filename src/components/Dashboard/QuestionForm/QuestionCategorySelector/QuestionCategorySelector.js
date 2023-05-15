import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import {
    updateQuestionForm,
    selectQuestionForm,
} from '../../QuestionForm/questionFormSlice'
import { selectCategories } from './questionCategoriesSlice'

const QuestionCategorySelector = () => {
    const dispatch = useDispatch()
    const categories = useSelector(selectCategories)
    const newQuestion = useSelector(selectQuestionForm)

    const handleChange = (e) => dispatch(updateQuestionForm(e.target))

    return (
        <FormControl fullWidth sx={{ '& > :not(style)': { m: 1, ml: 0 } }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                sx={{ width: 200, py: 0.4 }}
                variant="standard"
                name="categoryId"
                label="Category"
                value={newQuestion.categoryId}
                onChange={(e) => handleChange(e)}
            >
                {categories.map((category, index) => (
                    <MenuItem key={index} value={category.id}>
                        {category.category}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default QuestionCategorySelector
