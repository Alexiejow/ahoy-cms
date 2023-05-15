export const mapApiQuestionToView = (question) => {
    const { id, categoryName, dateCreated, body, answers, photoUrl } = question
    return {
        id, categoryName, dateCreated, body, answers, photoUrl,
        correctAnswer: answers[0],
        incorrectAnswer1: answers[1],
        incorrectAnswer2: answers[2],
    }
}

export const mapGetApiQuestionsToView = (questions) => {
    return questions.map(q => mapApiQuestionToView(q))
}

export const mapViewQuestionToPutApi = (categories, question) => {
    const selectedCategory = categories.find(c => c.category === question.categoryName)
    const { id, body, correctAnswer, incorrectAnswer1, incorrectAnswer2, photoUrl } = question

    return {
        id,
        categoryId: selectedCategory.id,
        body,
        answers: [
            correctAnswer,
            incorrectAnswer1,
            incorrectAnswer2
        ],
        photoUrl
    }
}

export const mapViewQuestionToPostApi = (question) => {
    const { categoryId, body, correctAnswer, incorrectAnswer1, incorrectAnswer2, imageUrl } = question
    return [{
        categoryId,
        body,
        answers: [
            correctAnswer,
            incorrectAnswer1,
            incorrectAnswer2
        ],
        photoUrl: imageUrl,
    }]
}