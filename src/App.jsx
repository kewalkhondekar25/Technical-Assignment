import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmailSubjectInput from './components/EmailSubjectInput'
import EmailPreview from './components/EmailPreview'

function App() {

  return (
    <>
      <EmailSubjectInput/>
      <EmailPreview/>
    </>
  )
}

export default App
