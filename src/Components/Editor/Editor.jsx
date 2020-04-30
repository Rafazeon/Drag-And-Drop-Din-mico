import React from 'react'
// Grid Component
import Grid from "@material-ui/core/Grid";
// Components para o Editor
import { DropBox } from '../Drag/Drag';


function Editor(props) {
    const { classes } = props
    
    return (
        <Grid className={classes.root} spacing={2}>
            <div>Component Default</div>
            <DropBox />
        </Grid>
    )
}

export default Editor