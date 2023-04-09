import LoginDialog from './account/LoginDialog';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import ChatDialog from './chat/ChatDialog';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;      



const Header = styled(AppBar)`
    background-color: #dfbedf;
    height: 125px;
    box-shadow: none;
`;
    
const LoginHeader = styled(AppBar)`
    background: #bebedf;
    height: 200px;
    box-shadow: none;
`;

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
        <Component>
        {
            account ? 
            <>
                <Header>
                    <Toolbar></Toolbar>
                </Header>
                <ChatDialog />
            </>
            :
            <>
                <LoginHeader>
                    <Toolbar></Toolbar>
                </LoginHeader>
                <LoginDialog />
            </>
        }
        </Component>
    )
}

export default Messenger ;