import React from 'react';
import TextField from '@material-ui/core/TextField';

const Edit = ({value, name, handle_input, id}) => {
    return (
        <TextField
            inputProps={{style: {fontSize: '0.8125rem'}}}
            value={value}
            name={name}
            onChange={(e) => handle_input(e, id)}
        />
    );
};

export default Edit;