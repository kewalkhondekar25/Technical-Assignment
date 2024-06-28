import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmailSubjectInput from './components/EmailSubjectInput'
import EmailPreview from './components/EmailPreview'
import SubjectLine from './components/SubjectLine'
import { Grid } from '@mui/material';

function App() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <EmailSubjectInput />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <EmailPreview />
      </Grid>
      {/* Uncomment if you want to include SubjectLine */}
      {/* <Grid item xs={12} sm={8} md={6} lg={4}>
        <SubjectLine />
      </Grid> */}
    </Grid>
  )
}

export default App
