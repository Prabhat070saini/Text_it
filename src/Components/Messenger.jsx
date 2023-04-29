import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import ChatDialog from "./chat/ChatDialog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import { Routes, Route } from "react-router-dom";
import Stenography from "./stenography/Stenography";
const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
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
      {account ? (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header>
                    <Toolbar></Toolbar>
                  </Header>
                  <ChatDialog />
                </>
              }
            />
            <Route path="/Stenography" element={<Stenography />} />
          </Routes>
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
