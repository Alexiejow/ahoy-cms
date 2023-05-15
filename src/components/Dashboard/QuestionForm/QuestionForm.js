import React from "react"
import { Box, Typography, Paper, } from "@mui/material"

import QuestionCategorySelector from "./QuestionCategorySelector/QuestionCategorySelector"
import QuestionPhotoUploader from "./QuestionPhotoUploader/QuestionPhotoUploader"
import QuestionTextInputs from "./QuestionTextInputs/QuestionTextInputs"
import QuestionSubmit from "./QuestionSubmit/QuestionSubmit"

const QuestionForm = () => {
  return (
    <>
      <Box component="form" sx={{ m: 4 }} noValidate autoComplete="off">
        <Typography variant="h6" align="left" color="textPrimary" marginLeft="15">
          New question
        </Typography>
        <Paper sx={{ p: 2, pr: 2, "& > :not(style)": { m: 1, py: 0.5, pr: 2, mb: 2 }}}>
          <QuestionCategorySelector />
          <QuestionPhotoUploader />
          <QuestionTextInputs />
          <QuestionSubmit />
        </Paper>
      </Box>
    </>
  )
}

export default QuestionForm
