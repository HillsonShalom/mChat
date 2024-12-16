import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar } from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;
const navArray = ['Inbox', 'Starred', 'Send email', 'Drafts']

const NavBar = () => {
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
            <Toolbar/>
            <Divider/>
            <List>
            {navArray.map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            ))}
            </List>
            <Divider/>
            <List>

            </List>
        </Drawer>
  )
}

export default NavBar