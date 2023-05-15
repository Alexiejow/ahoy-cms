import axios from 'axios'

const url = '###'

export const fetchAllQuestions = () => axios.get(url + '/exam/question')

export const addQuestion = (newQuestion) => axios.post(url + '/exam/question', newQuestion)

export const updateQuestion = (question) => axios.put(url + '/exam/question/' + question.id, question)

export const fetchAllCategories = () => axios.get(url + '/category')