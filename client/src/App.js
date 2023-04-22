import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Messenger from './Components/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId = '388251775099-mf8aj89q8qes30teengsddl4vvv0kj69.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider >
        <Messenger/>
      </AccountProvider>
       
    </GoogleOAuthProvider>
  );
}

export default App;
