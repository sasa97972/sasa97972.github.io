import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

const Toolbar = ({handle_add}) => {
    return (
        <Grid container justify="center">
            <Fab
                onClick={handle_add}
                style={{backgroundColor: '#28a745', color: 'white'}}
                label="Add">
                <AddIcon/>
            </Fab>
        </Grid>
    );
};

export default Toolbar;