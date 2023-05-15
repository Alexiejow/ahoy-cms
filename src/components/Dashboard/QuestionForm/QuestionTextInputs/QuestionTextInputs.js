import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { TextField } from "@mui/material"

import { updateQuestionForm, selectQuestionForm } from '../questionFormSlice'

const QuestionTextInputs = () => {
  const dispatch = useDispatch()
  const newQuestion = useSelector(selectQuestionForm)

  const formItems = [
    {
      label: "❓ Question",
      name: "body",
    },
    {
      label: "✔️ Answer",
      name: "correctAnswer",
    },
    {
      label: "❌ Answer",
      name: "incorrectAnswer1",
    },
    {
      label: "❌ Answer",
      name: "incorrectAnswer2",
    },
  ]

  return (
    <>
      {formItems.map((item, i) => (
        <TextField
          key={i}
          fullWidth
          variant="standard"
          onChange={(e) => dispatch(updateQuestionForm({name: e.target.name, value: e.target.value}))}
          label={item.label}
          name={item.name}
          value={newQuestion[item.name]}
        />
      ))}
    </>
  )
}

export default QuestionTextInputs
