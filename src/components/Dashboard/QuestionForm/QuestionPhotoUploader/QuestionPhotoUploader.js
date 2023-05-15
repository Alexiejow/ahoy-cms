import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Input, TextField, Button } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import CircularProgress from '@mui/material/CircularProgress'

import questionFormSlice, {
    updateQuestionForm,
    selectQuestionForm,
    uploadImage,
} from '../questionFormSlice'

const QuestionPhotoEditor = () => {
    const dispatch = useDispatch()
    const questionForm = useSelector(selectQuestionForm)
    const [image, setImage] = useState({})

    const handleUploadImage = () => {
        if (image) dispatch(uploadImage(image))
        else alert('No image chosen')
    }

    return (
        <label htmlFor="contained-button-file">
            <Input
                sx={{ p: 1, pl: 0, mb: 2, mr: 3 }}
                id="contained-button-file"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <Button
                variant="outlined"
                onClick={() => dispatch(uploadImage(image))}
            >
                <FileUploadIcon />
            </Button>
            {questionForm.imageUrl === 'pending' && <CircularProgress />}
            <TextField
                sx={{ ml: 3 }}
                variant="standard"
                label="Image URL"
                name="imageUrl"
                value={questionForm.imageUrl}
                onChange={(e) =>
                    dispatch(
                        updateQuestionForm({
                            name: e.target.name,
                            value: e.target.value,
                        })
                    )
                }
            />
        </label>
    )
}

export default QuestionPhotoEditor
