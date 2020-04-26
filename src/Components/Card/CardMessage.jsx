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
    const { classes } = props
    return (
        <CardContent>
            <Paper className={classes.paper} elevation={2}>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </Paper>
        </CardContent>
    )
}

export default withStyles(styles)(CardMessage)