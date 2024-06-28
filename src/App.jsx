import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmailSubjectInput from './components/EmailSubjectInput'
import { Grid } from '@mui/material';
import EmailScreen from './components/EmailScreen'

function App() {

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <EmailSubjectInput />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <EmailScreen/>
      </Grid>
    </Grid>
  )
}

export default App
