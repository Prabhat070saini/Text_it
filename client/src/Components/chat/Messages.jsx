import { useState, useEffect, useContext } from 'react';
import { Box, styled } from '@mui/material';
import Footer from './Footer';
import { io } from 'socket.io-client';
import { useRef } from 'react';

import Message from './Message';
import { newMessages , getMessages} from '../../service/api';
import { AccountContext } from '../../context/AccountProvider';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

// const StyledFooter = styled(Box)`
//     height: 55px;
//     background: #ededed;
//     // position: absolute;
//     width: 100%;
//     // bottom: 0
// `;
    
const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;


function Messages({person, conversation}) {

  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const [file, setFile] = useState();
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [image , setImage] = useState('');
  const [incomingMessage, setIncomingMessage] = useState(null);

  const { account , socket} = useContext(AccountContext);

  const scrollRef = useRef();

  useEffect(() => {
    socket.current.on('getMessage', data => {
        setIncomingMessage({
          ...data, 
          createdAt : Date.now()
        })
    })
  }, [])

  useEffect(() => {
    const getMessageDetails = async () => {
        let data = await getMessages(conversation?._id);
        setMessages(data);
    }
    conversation._id && getMessageDetails();
 }, [ person._id , conversation._id,  newMessageFlag]);

 useEffect(() => {
  scrollRef.current?.scrollIntoView({transition : 'smooth'})
 }, [messages])

  const sendText = async(e) => {

    const code = e.keyCode || e.which ;
    if(code === 13)
    {
      let message = {};
      if(!file){
        
        message = {
          senderId: account.sub,
          receiverId: person.sub, 
          conversationId: conversation._id,
          type: 'text',
          text: value
        }
      }else{
        message = {
          senderId: account.sub,
          receiverId: person.sub, 
          conversationId: conversation._id,
          type: 'file',
          text: image
        }
      }

      socket.current.emit('sendMessage', message);

      await newMessages(message);

      setValue('');
      setFile('');
      setImage('');
      setNewMessageFlag(prev => !prev);
    }
  }

  return (
    <Wrapper>
        <Component>
          {
            messages && messages.map(message => (
              
              <Container>
                <Message message={message} />
              </Container>
                
            ))
          }
        </Component>
        <Footer 
          sendText={sendText} 
          setValue={setValue}
          value={value} 
          file={file}
          setFile={setFile}
          setImage={setImage}
        />
    </Wrapper>
  )
}

export default Messages