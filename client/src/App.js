import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Messenger from './Components/Messenger';
import AccountProvider from './context/AccountProvider';
import { Routes, Route } from "react-router-dom";
import Stenography from './Components/stenography/Stenography';
import ChatDialog from './Components/chat/ChatDialog';
function App() {
  const clientId = '388251775099-mf8aj89q8qes30teengsddl4vvv0kj69.apps.googleusercontent.com';
  return (

    <Routes>
      <Route path="/" element={
        <GoogleOAuthProvider clientId={clientId}>
          <AccountProvider >
            <Messenger />
          </AccountProvider>
        </GoogleOAuthProvider>} />

      <Route path="/Stenography" element={<Stenography />} />
      <Route path="/Massanger" element={<ChatDialog />} />
    </Routes>

  );
}

export default App;
