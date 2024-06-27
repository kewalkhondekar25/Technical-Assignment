import React from 'react'
import { useDispatch } from 'react-redux'
import { setSubjectLineA, setSubjectLineB } from '../features/email/emailSlice';

const EmailSubjectInput = () => {

  const dispatch = useDispatch();
  return (
    <div style={{display: "grid"}}>
      <input 
        type="text" 
        placeholder='subject line A'
        onChange={(e) => dispatch(setSubjectLineA(e.target.value))}
      />  
      <input 
        type="text" 
        placeholder='subject line B'
        onChange={(e) => dispatch(setSubjectLineB(e.target.value))}/>
    </div>
  )
}

export default EmailSubjectInput