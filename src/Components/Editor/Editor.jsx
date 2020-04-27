import React, { useContext } from 'react'
// Drag Context
import DragContext from '../../Contexts/DragContext';
// Grid Component
import Grid from "@material-ui/core/Grid";
// Components para o Editor
import Card from '../Card/CardContainer';
import { DropBox } from '../Drag/Drag';


function Editor(props) {
    const [drag] = useContext(DragContext)
    const { arr, dropped } = drag
    const { classes } = props
    return (
        <Grid className={classes.root} spacing={2}>
            <div>Component Default</div>
            <DropBox dropped={dropped} Component={Card} Children={arr} />
        </Grid>
    )
}

export default Editor