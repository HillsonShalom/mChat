import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import messatesJson from '../../data/messages.json'
import IMessage from "../types/messageModel";
import Message from "./Message";
const messages = messatesJson as unknown as IMessage[]


const MessagesPage = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "Background.default", p: 3 }}
    >
      <Toolbar />
      {messages.map(m => <Message msg={m}/>)}
    </Box>
  );
};

export default MessagesPage;
