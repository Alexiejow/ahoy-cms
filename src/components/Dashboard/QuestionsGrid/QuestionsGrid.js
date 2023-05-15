import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector, useDispatch } from 'react-redux'

import { selectQuestionsGrid, updateQuestion } from './questionsGridSlice'
import { selectCategories } from '../QuestionForm/QuestionCategorySelector/questionCategoriesSlice'
import { mapViewQuestionToPutApi } from '../../../mappers/questionsMapper'

import columnsProvider from './columnData'

const QuestionsGrid = () => {
    const questions = useSelector(selectQuestionsGrid)
    const categories = useSelector(selectCategories)
    const dispatch = useDispatch()
    const [editedCell, setEditedCell] = useState({})
    const columns = columnsProvider({categories})

    const handleCellEditStop = (id, question) => {
        const questionMapped = mapViewQuestionToPutApi(categories, question)
        dispatch(updateQuestion(questionMapped))
    }

    return (
        <Box sx={{ m: 4 }}>
            <Typography variant="h6" align="left" color="textPrimary">
                Edit questions
            </Typography>
            <Typography variant="subtitle1" align="left" color="textSecondary">
                Start editing by double-clicking on a row, submit with Enter or clicking outside press ESC to cancel
            </Typography>

            <div style={{ height: 650, width: '100%' }}>
                <DataGrid
                    autoPageSize
                    editMode="cell"
                    columns={columns}
                    rows={questions}
                    experimentalFeatures={{ newEditingApi: true }}
                    onCellEditStart={(params: CellEditStartParams) => {
                        setEditedCell(params.row)
                    }}
                    onCellEditCommit={(params: CellEditCommitParams) => {
                        const { id, field, value }  = params
                        console.log('params', params)
                        console.log('editedCell', editedCell)
                        if (params.value !== editedCell[field]) {
                            setEditedCell({...editedCell, [field]: value})
                            const updatedRow = {...editedCell, [field]: value}
                            handleCellEditStop(id, updatedRow)
                        }
                        setEditedCell({})
                }}
                />
            </div>
        </Box>
    )
}

export default QuestionsGrid
