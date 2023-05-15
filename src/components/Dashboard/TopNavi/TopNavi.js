import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../../../api/firebase";
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { Sailing } from '@mui/icons-material'

import { logout } from '../../../api/firebase'

const TopNavi = (props) => {
    const navTitle = props.navTitle
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (!user) navigate('/')
    }, [user])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="relative">
                <Toolbar>
                    <Sailing sx={{ mx: 1 }} />
                    <Typography sx={{ flexGrow: 1 }} variant="h6">
                        {navTitle}{' '}
                    </Typography>
                    <Button color="inherit" onClick={() => logout()}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default TopNavi
