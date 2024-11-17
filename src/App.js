import React,{ useState, useEffect} from 'react'
import { FormControl, Input } from '@mui/material';
import Messages from './Messages';
import db from './Firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';


import './App.css';

const App = () => {
  const [input, setInput]= useState('');
  
  const [messages, setMessages] = useState([]);
  const [username, setusername] = useState('');

 useEffect(() =>{
  db.collection('messages')
  .orderBy('timestamp', 'desc')
  .onSnapshot((snapshot) =>{
    setMessages(snapshot.docs.map(doc =>({id: doc.id, messages: doc.data()})));
  });

 },  []);

  useEffect(() =>{ 
   setusername(prompt('please enter your name'));
  }, [] )

  const sendMessage =(e) => {
    e.preventDefault();

    db.collection('messages').add({
      messages: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
   

    setInput('');
  }
  
  return (
    <div className='App'>
      <i className="fa-solid fa-message"></i>
      <h1>Be Close! &#127757;</h1>
      <h3> Welcome {username}</h3>
      
      <form  className='app__form'>
      <FormControl className='app__formcontrol'>
      <Input className="app__input" placeholder='Enter a message...' value={input} onChange={e => setInput(e.target.value)}/>
      <IconButton className="app__iconbutton" disabled={!input} color="primary" variant='outlined' type='submit' onClick={sendMessage} >
        <SendIcon/>
      </IconButton>
      </FormControl>  
      </form>

      <FlipMove>
      {
        messages.map(({id, messages}) =>(
          <Messages key={id} username={username} messages={messages}/>
          
        ))
      }
      </FlipMove>

      

    </div>
  );
}

export default App