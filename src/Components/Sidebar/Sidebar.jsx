import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import CardMedia from '../Card/CardMedia'
import CardMessage from '../Card/CardMessage'
// Drag Component
import { DraggableBox } from '../Drag/Drag';

function Sidebar(props) {
  const {
    classes,
    theme,
    open,
    handleDrawerOpen,
    handleDrawerClose,
  } = props;
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Drag Creator
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <div key={index}>
                  <DraggableBox Icon={InboxIcon} Children={<CardMedia img={"https://natgeo.imgix.net/factsheets/thumbnails/01-balance-of-nature.adapt.jpg?auto=compress,format&w=1600&h=900&fit=crop"} />}></DraggableBox>
                  <DraggableBox Icon={MailIcon} Children={<CardMessage text={"Ola Rafael esse é um componente de texto"} />}></DraggableBox>
                  <DraggableBox Icon={InboxIcon} Children={<CardMedia img={"https://media-cdn.tripadvisor.com/media/photo-s/0e/cf/d8/38/por-do-sol.jpg"} />}></DraggableBox>
                  <DraggableBox Icon={MailIcon} Children={<CardMessage text={"Ola Dionatan esse é um componente de texto"} />}></DraggableBox>
                </div>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
export default Sidebar;
