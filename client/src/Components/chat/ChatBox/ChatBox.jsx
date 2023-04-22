import { Box } from "@mui/material";
import { useContext } from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import Messages from "../Messages";
import { AccountContext } from "../../../context/AccountProvider";

function ChatBox() {
  const { person } = useContext(AccountContext);

  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person} />
      <Messages person={person} />
    </Box>
  );
}

export default ChatBox;
