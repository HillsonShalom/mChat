import {
  AppBar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useAppSelector } from "../store/store";

const drawerWidth = 240;

const NavBar = () => {
  const chats = useAppSelector(s => s.user.user?.chats)
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <AppBar sx={{ width: `${drawerWidth}px`, position: "static" }}>
        <Toolbar>
          <Typography>chats</Typography>
        </Toolbar>
      </AppBar>

      <List>
        {chats && chats.map((chat, index) => (
          <ListItem key={chat.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {chat.name}
            </ListItemButton>
            {}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List></List>
    </Drawer>
  );
};

export default NavBar;
