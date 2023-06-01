import React from "react";
import { Drawer as MUIDrawer, ListItem, List, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import EditNotificationsOutlinedIcon from "@mui/icons-material/EditNotificationsOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
});

const Drawer = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const itemsList = [
    {
      text: "User",
      icon: <AccountCircleOutlinedIcon />,
      onClick: () => navigate("/")
    },
    {
      text: "DayTrack",
      icon: <TodayOutlinedIcon />,
      onClick: () => navigate("/about")
    },
    {
      text: "Reminders",
      icon: <EditNotificationsOutlinedIcon />,
      onClick: () => navigate("/reminders")
    },
    ,
    {
      text: "User Preferneces",
      icon: <AccessibilityNewOutlinedIcon />,
      onClick: () => navigate("/survey")
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlinedIcon />,
      onClick: () => navigate("/contact")
    }
  ];

  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default Drawer;