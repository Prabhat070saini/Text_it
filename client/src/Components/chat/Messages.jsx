import { useState, useEffect, useContext, useRef } from 'react';
import { Box, styled } from '@mui/material';
import Footer from './Footer';
// import { io } from 'socket.io-client';

// import { getMessages, newMessages } from '../../../service/api';
// import { AccountContext } from '../../../context/AccountProvider';

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

// const Container = styled(Box)`
//     padding: 1px 80px;
// `;


function Messages() {
  return (
    <Wrapper>
        <Component>

        </Component>
        <Footer />
    </Wrapper>
  )
}

export default Messages