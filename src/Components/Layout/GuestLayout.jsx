import React, { useState } from 'react'
// DND Provider
import { DndProvider } from 'react-dnd';
// HTML5Backend
import HTML5Backend from 'react-dnd-html5-backend';
// Context Props
import DragContext from '../../Contexts/DragContext';
// Estilo Component
import { makeStyles } from '@material-ui/core/styles';
// Grid Component
import Grid from "@material-ui/core/Grid";
// Sidebar Component
import Sidebar from '../Sidebar/SidebarContainer';
// Header Component
import Header from './Header';
// Footer Component
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
        root: {
            height: "100vh",
            background: "#12115e",
            color: "#fff"
        },
    })
)

function GuestLayout(props) {
    const classes = useStyles();
    const [drag, setDrag] = useState("")
    return (
        <Grid container className={classes.root}>
            <DndProvider backend={HTML5Backend}>
              <DragContext.Provider value={[drag, setDrag]} >
                <Sidebar />
                <Header />
                    {props.children}
                <Footer />
               </DragContext.Provider>
            </DndProvider>
        </Grid>
    )
}

export default GuestLayout