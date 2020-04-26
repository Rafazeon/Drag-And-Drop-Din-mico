import React from 'react'
// Estilo Component
import { makeStyles } from '@material-ui/core/styles';
// Editor Component
import Editor from './Editor'
// Layout Component
import GuestLayout from '../Layout/GuestLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 80
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  }
}));

function EditorContainer() {
    const classes = useStyles();
    return (
        <GuestLayout>
            <Editor 
                classes={classes} 
            />
        </GuestLayout>
    )
}

export default EditorContainer