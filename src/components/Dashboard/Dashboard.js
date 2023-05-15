import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CssBaseline } from '@mui/material'

import TopNavi from './TopNavi/TopNavi'
import QuestionForm from './QuestionForm/QuestionForm'
import QuestionsGrid from './QuestionsGrid/QuestionsGrid'

import { fetchQuestions } from './QuestionsGrid/questionsGridSlice'
import { fetchCategories } from './QuestionForm/QuestionCategorySelector/questionCategoriesSlice'


const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchQuestions())
    dispatch(fetchCategories())
  },[])

  return (
    <>
      <CssBaseline />
      <TopNavi navTitle="AHOY Admin Panel" />
      <main>
          <QuestionForm />
          <QuestionsGrid />      
      </main>
    </>
  )
}

export default Dashboard
