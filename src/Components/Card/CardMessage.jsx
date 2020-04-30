import React from 'react'
// Estilo Component
import { withStyles } from "@material-ui/styles";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
    paper: {
        padding: 10
    }
}


function CardMessage(props) {
    const { classes, text } = props

    return (
        <CardContent>
            <Paper className={classes.paper} elevation={2}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {text}
                </Typography>
            </Paper>
        </CardContent>
    )
}

export default withStyles(styles)(CardMessage)