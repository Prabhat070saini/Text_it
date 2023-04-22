import { Box , Typography, styled} from '@mui/material'
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { setConversation } from '../../../service/api';

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
   
const Image = styled('img') ({
  width: 50,
  height: 50,
  objectFit: 'cover',
  borderRadius: '50%',
  padding: '0 14px'
});


function Conversation({user}) {

  const { setPerson , account} = useContext(AccountContext);

  const getUser = async () => {
    setPerson(user);
    await setConversation({senderId: account.sub, receiverId: user.sub})
  }

  return (
    <Component onClick={()=> getUser()}>
      <Box>
        <Image src={user.picture} alt="dp" />
      </Box>
      <Box>
        <Box>
          <Typography>
            {user.name}
          </Typography>
        </Box>
      </Box>  
    </Component>
  )
}

export default Conversation