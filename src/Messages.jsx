import React, {forwardRef} from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import './Messages.css';

const Messages = forwardRef(({messages, username}, ref) => {
  const isUser = username=== messages.username;
  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
    <Card className={ isUser? "message__usercard": "message__guestcard"}>
      <CardContent>
        <Typography
        variant='h5'
        component='h2'>
          {!isUser && `${messages.username || 'UnKnown User'} :`} {messages.messages}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
})

export default Messages