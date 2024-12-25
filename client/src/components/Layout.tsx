import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import MessagesPage from "./MessagesPage";
import NavBar from "./NavBar";
import theme from "../style/theme1";
import { useState } from "react";
import DialogNewChat from "./DialogNewChat";

const drawerWidth = 240;

const Layout = () => {
  const [newChatDialog, setNewChatDialog] = useState(false)
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography>Permanent drawer</Typography>
          </Toolbar>
        </AppBar>
        
        <NavBar/>

        <MessagesPage/>

        <Box sx={{position: 'fixed', zIndex: '10000', top: '13px', right: '50px'}}>
          <Button variant="contained" sx={{color: theme.palette.primary.dark}} onClick={() => {setNewChatDialog(!newChatDialog)}}>New Chat</Button>
          <Button variant="contained" sx={{color: theme.palette.primary.dark, ml: '20px'}}>New Group</Button>
        </Box>
        <DialogNewChat open={newChatDialog}/>
      </Box>
    </div>
  );
};

export default Layout;
