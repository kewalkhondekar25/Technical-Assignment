import React from 'react'
import { useSelector } from 'react-redux'

const EmailPreview = () => {
  const {subjectLineA, subjectLineB} = useSelector((store => store.email))
  return (
    <div>
      <p>{subjectLineA}</p>
      <p>{subjectLineB}</p>
    </div>
  )
}

export default EmailPreview