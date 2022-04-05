import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const drawerWidth = 0;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
       <Divider /> 
      <Box sx={{ width: "100%", length: "80%", maxWidth: "360" }}>
        <List component={Stack} direction={"column"}>
          
            <ListItem key="Home" component={Link} to="/">
              <ListItemIcon>
                {" "}
                <HomeIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem key="Reading List" component={Link} to="/ReadingList">
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary="Reading List" />
            </ListItem>
            <ListItem key="Tags" component={Link} to="/Tags">
              <ListItemIcon>
                <TagIcon />
              </ListItemIcon>
              <ListItemText primary="Tags" />
            </ListItem>
            <ListItem key="FAQ" component={Link} to="/FAQ">
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="FAQ" />
            </ListItem>
          
          
        </List>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
   
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
         
         <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle} 
           ModalProps={{
             keepMounted: true, // Better open performance on mobile.
           }}
           sx={{
             display: { xs: "block", sm: "none" },
             "& .MuiDrawer-paper": {
               boxSizing: "border-box",
               width: "0px",
            },
           }}
         >
           {drawer}
         </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "500px",
              
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
     
      >
        <Toolbar />
        
      </Box>
    </Box>
  );
}



export default ResponsiveDrawer;
