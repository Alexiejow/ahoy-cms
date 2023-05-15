import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Dashboard from '../components/Dashboard/Dashboard'
import LoginForm from '../components/LoginForm/LoginForm'


const App = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginForm/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </Router>
        </>
    )
}

export default App
