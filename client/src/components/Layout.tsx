import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import MessagesPage from "./MessagesPage";
import NavBar from "./NavBar";

const drawerWidth = 240;

const Layout = () => {
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
      </Box>
    </div>
  );
};

export default Layout;
